import {callApiGames} from "../services/rawApi";
import {appendGamesHtml} from "../helpers/appendGamesHtml";
import {GameInterface} from "../interfaces/GameInterface";

export async function searchGames() {

    const searchInput = document.getElementById('search-name') as HTMLInputElement;
    const genreSelect = document.getElementById('genre-select') as HTMLSelectElement;


    let games: GameInterface[] = await callApiGames({search: searchInput.value, genres: genreSelect.value})

    appendGamesHtml(games)

}