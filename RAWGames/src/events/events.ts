import {searchGames} from "../handlers/searchGames";
import {saveSearch} from "../handlers/saveSearch";

export async function userEvents() {
    const searchButton = document.getElementById('search-button') as HTMLButtonElement;
    const saveSearchButton = document.getElementById('save-search-button') as HTMLButtonElement;
    searchButton.addEventListener('click', searchGames)
    saveSearchButton.addEventListener("click",saveSearch);

}

