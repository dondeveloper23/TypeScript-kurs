import type {SingleMovieInterface} from "../interfaces/SingleMovieInterface";
import {showMovieDetails} from "./showMovieDetails";

export function listMovieResults(movies: SingleMovieInterface[], htmlMovieList: HTMLElement) {
    htmlMovieList.innerHTML = "";

    movies.forEach(movie => {
        const movieTitle = document.createElement("h2") as HTMLHeadingElement;
        movieTitle.textContent = <string>movie.Title;

        const moviePoster = document.createElement("img") as HTMLImageElement;
        moviePoster.src = <string>movie.Poster;

        const movieCard = document.createElement("div") as HTMLDivElement;
        movieCard.classList.add("movie-card");
        movieCard.append(moviePoster, movieTitle);
        const viewSingleMovieButton = document.createElement("button") as HTMLButtonElement;
        viewSingleMovieButton.textContent = "Detail";
        viewSingleMovieButton.setAttribute("data-imdb-id", <string> movie.imdbID);
        movieCard.append(viewSingleMovieButton);
        htmlMovieList.appendChild(movieCard);

        viewSingleMovieButton.addEventListener("click", async () => {
            showMovieDetails(<string> movie.imdbID)
        })
    })
}