import type {SingleMovieSearch} from "../interfaces/movieStorage/SingleMovieSearch";
import {getAllMovieSearches} from "../repository/movieStorage";
import {callOMDBApi} from "../services/omdbApiService";
import type {ApiSuccessInterface} from "../interfaces/ApiSuccessInterface";
import {listMovieResults} from "./listMovieResults";

export function renderPreviousSearches(): void {
    const existingMoviesDiv = document.getElementById("existing-movies") as HTMLDivElement;
    const movieList = document.getElementById("movie-list") as HTMLDivElement;

    existingMoviesDiv.innerHTML = "";
    let existingMovies: SingleMovieSearch[] = getAllMovieSearches();
    existingMovies.forEach((movie: SingleMovieSearch) => {
        const movieLabelTitle = document.createElement("div") as HTMLDivElement;
        movieLabelTitle.textContent = `${movie.name} (${movie.year})`;
        movieLabelTitle.setAttribute("data-movie-name", movie.name);
        movieLabelTitle.setAttribute("data-movie-year", movie.year);
        existingMoviesDiv.append(movieLabelTitle)

        movieLabelTitle.addEventListener("click", async () => {
            let response = await callOMDBApi([
                {key: "s", value: movie.name},
                {key: "y", value: movie.year},
            ])

            const successData = response.data as ApiSuccessInterface
            listMovieResults(successData.Search, movieList);
        })
    })
}