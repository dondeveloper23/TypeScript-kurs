import {SearchQueryInterface} from "../interfaces/searchQueryInterface";
import {appendSavedSearch} from "../helpers/appendSavedSearchHtml";
import {SavedSearchInterface} from "../interfaces/savedSearchInterface";


export function saveSearch(): void {
    const savedSearches: SavedSearchInterface[] = JSON.parse(localStorage.getItem("searches") || "[]");
    const searchInput = document.getElementById('search-name') as HTMLInputElement;
    const genreSelect = document.getElementById('genre-select') as HTMLSelectElement;
    const savedSearchDiv = document.getElementById('saved-searches-div') as HTMLDivElement;
    const selectedIndex = genreSelect.selectedIndex;
    const selectedGenre = genreSelect.options[selectedIndex].text;

    if (!searchInput.value || !genreSelect.value) {
        alert("Please enter a name and genre!")
        return;
    }
    const currentSearchTerm = searchInput.value.trim();
    const currentGenre = String(genreSelect.value);
    if (isDuplicate(savedSearches, currentSearchTerm, currentGenre)) {
        alert("Already saved!!");
        return;
    }

    const newSearch: SavedSearchInterface = {
        search: currentSearchTerm,
        genres: currentGenre,
        genreName: selectedGenre
    };

    savedSearches.push(newSearch);

    localStorage.setItem('searches', JSON.stringify(savedSearches));
    appendSavedSearch(savedSearchDiv, currentSearchTerm,String(genreSelect.value), selectedGenre)
}



function isDuplicate(arr: SavedSearchInterface[], search: string, genre: string): boolean {
    return arr.some((saved) => {
        return (saved.search || "").toLowerCase() === search.toLowerCase() &&
            saved.genres === genre;
    });
}