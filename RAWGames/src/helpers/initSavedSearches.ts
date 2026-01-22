import {SavedSearchInterface} from "../interfaces/savedSearchInterface";
import {appendSavedSearch} from "./appendSavedSearchHtml";

export function initSavedSearches(): void {
    const savedSearches: SavedSearchInterface[] = JSON.parse(localStorage.getItem("searches") || "[]");
    const savedSearchDiv = document.getElementById('saved-searches-div') as HTMLDivElement;
    savedSearches.forEach((search) => {
        appendSavedSearch(savedSearchDiv, search.search, search.genres, search.genreName)
    })
}