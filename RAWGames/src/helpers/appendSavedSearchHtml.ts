import {callApiGames} from "../services/rawApi";
import {appendGamesHtml} from "./appendGamesHtml";
import {SavedSearchInterface} from "../interfaces/savedSearchInterface";
import {initSavedSearches} from "./initSavedSearches";

export  function appendSavedSearch(element: HTMLDivElement, searchText: string, searchGenreID: string, genreName: string): void {

    const savedSearchDiv = document.createElement("div") as HTMLDivElement;
    savedSearchDiv.className = "saved-search-item";


    const name = document.createElement("p") as HTMLParagraphElement;
    const formattedName = searchText.charAt(0).toUpperCase() + searchText.slice(1).toLowerCase();
    name.innerText = `Name: ${formattedName}`;


    const genre = document.createElement("p") as HTMLParagraphElement;
    genre.innerText = `Genre: ${genreName}`;
    genre.setAttribute("id", searchGenreID);


    const searchBtn = document.createElement("button") as HTMLButtonElement;
    searchBtn.innerText = "Search";
    searchBtn.className = "btn-search-trigger";


    const deleteBtn = document.createElement("button") as HTMLButtonElement;
    deleteBtn.innerText = "X";
    deleteBtn.className = "btn-delete";


    searchBtn.onclick = async () => {
       const games = await callApiGames({search: searchText, genres: searchGenreID});
        appendGamesHtml(games)
    };

    deleteBtn.onclick = () => {
        const savedSearches: SavedSearchInterface[] = JSON.parse(localStorage.getItem("searches") || "[]");
        const filterSearches = savedSearches.filter((save) => {
            return save.search !== searchText || save.genres !== searchGenreID;
        })
        localStorage.setItem("searches", JSON.stringify(filterSearches));
        savedSearchDiv.remove();

    };

    savedSearchDiv.append(name, genre, searchBtn, deleteBtn);

    element.appendChild(savedSearchDiv);
}