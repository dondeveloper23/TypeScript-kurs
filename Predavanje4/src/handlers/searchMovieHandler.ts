import {callOMDBApi} from "../services/omdbApiService";
import type {ApiResponseErrorInterface} from "../interfaces/ApiResponseErrorInterface";
import {rememberMovieSearch} from "../repository/movieStorage";
import {renderPreviousSearches} from "../ui/renderPreviousSearch";
import type {ApiSuccessInterface} from "../interfaces/ApiSuccessInterface";
import {listMovieResults} from "../ui/listMovieResults";


export async function searchMovieHandler() {
    const movieList = document.getElementById("movie-list") as HTMLDivElement;
    const yearSelect = document.getElementById("movie-year") as HTMLSelectElement;
    const movieName = document.getElementById("movie-name") as HTMLInputElement;
    const errorMsg = document.getElementById("error-message") as HTMLDivElement;

    movieList.innerHTML = "";

    if (movieName.value.trim() === "") {
        alert("Please enter a valid movie name");
        return
    }

    let response = await callOMDBApi([
        {key: "s", value: movieName.value},
        {key: "y", value: yearSelect.value},
    ])
    console.log(response)
    if (response.data.Response === "False") {
        const errorData = response.data as ApiResponseErrorInterface

        errorMsg.innerHTML = " ";
        const errorMessage = document.createElement("h2") as HTMLHeadingElement;
        errorMessage.textContent = errorData.Error + " Here are some recommodations:";

        errorMsg.append(errorMessage);
        response = await callOMDBApi([
            {key: "s", value: movieName.value},
        ])
    } else {
        rememberMovieSearch({name: movieName.value, year: yearSelect.value});
        console.log("TEST")
        renderPreviousSearches()
    }

    const successData = response.data as ApiSuccessInterface
    listMovieResults(successData.Search, movieList);
}