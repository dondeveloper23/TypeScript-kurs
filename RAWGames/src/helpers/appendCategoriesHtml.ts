import {callApiCategory} from "../services/rawApi";

export async function appendCategoriesHtml() {
    const genreSelect = document.getElementById('genre-select') as HTMLSelectElement;

    const genres = await callApiCategory({})
    genres.forEach((genre) => {
        const option = document.createElement('option') as HTMLOptionElement;
        option.value = String(genre.id);
        option.textContent = genre.name;
        genreSelect.appendChild(option);
    })
}