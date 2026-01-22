import {searchMovieHandler} from "../handlers/searchMovieHandler";
import {clearMovieSearchesHandler} from "../handlers/clearMovieSearchesHandler";

export function bindSearchEvents(): void {
    const searchBtn = document.getElementById("search-btn") as HTMLButtonElement;
    const clearSearchBtn = document.getElementById("clear-search") as HTMLButtonElement;

    searchBtn.addEventListener("click", searchMovieHandler)
    clearSearchBtn.addEventListener("click", clearMovieSearchesHandler)
}