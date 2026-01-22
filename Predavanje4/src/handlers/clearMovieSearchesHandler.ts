import {clearMovieStorage} from "../repository/movieStorage";

export function clearMovieSearchesHandler(): void {
    const existingMoviesDiv = document.getElementById("existing-movies") as HTMLDivElement;
    clearMovieStorage();
    existingMoviesDiv.innerHTML = "";

}