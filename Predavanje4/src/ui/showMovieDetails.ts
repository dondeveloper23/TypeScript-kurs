import {callOMDBApi} from "../services/omdbApiService";
import type {ApiResponseErrorInterface} from "../interfaces/ApiResponseErrorInterface";
import type {ApiSuccessInterface} from "../interfaces/ApiSuccessInterface";
import type {SingleMovieInterface} from "../interfaces/SingleMovieInterface";

export async function showMovieDetails(imdbId: string) {
    const singleMoviePopup = document.getElementById("single-movie-popup") as HTMLDivElement;
    const popupInner = document.getElementById("singleMoviePopupInner") as HTMLDivElement;
    const response = await callOMDBApi([
        {key: "i", value: imdbId}
    ])
    if (response.data.Response ==="False") {
        return;
    }
    popupInner.innerHTML=""
    singleMoviePopup.style.display = "flex";

    const data = response.data as SingleMovieInterface;
    const moviePoster = document.createElement("img") as HTMLImageElement;
    moviePoster.src = <string> data.Poster;
    const movieTitle = document.createElement("h1") as HTMLHeadingElement;
    movieTitle.textContent = <string> data.Title;

    popupInner.appendChild(moviePoster);

}