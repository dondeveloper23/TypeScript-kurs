import {getMealByIngredients, getMealsByCategory} from "../services/mealDbService";

export async function searchMealHandler() {
    const categorySelect = document.querySelector('#categorySelect') as HTMLSelectElement;
    const ingredientSelect = document.querySelector('#ingredientSelect') as HTMLSelectElement;
    const areaSelect = document.querySelector('#areaSelect') as HTMLSelectElement;

    const selectedIngredients = Array.from(ingredientSelect.selectedOptions)
        .map(option => option.value)
    const response = await getMealsByCategory({data: {param: 'c', value: categorySelect.value}});
    const responseArea = await getMealsByCategory({data: {param: 'a', value: areaSelect.value}});
    const responseIngredients = getMealByIngredients(selectedIngredients);
    console.log(response, responseArea, responseIngredients)


}