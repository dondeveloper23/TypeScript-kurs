
import axios from 'axios';
import {MealInterface} from "../interfaces/MealInterface";
import {SearchByTextorLetterInterface} from "../interfaces/SearchByTextorLetterInterface";
import {SingleProductSearchInterface} from "../interfaces/SingleProductSearchInterface";
import {BuildUrlInterface} from "../interfaces/BuildUrlInterface";
import {GetCategoriesInterface} from "../interfaces/GetCategoriesInterface";
import {CategoriesInterface} from "../interfaces/CategoriesInterface";
import {SearchByCategoryInterface} from "../interfaces/searchByCategoryInterface";


const API_URL = "https://www.themealdb.com/api/json/v1/1/"

function buildApiUrl(endpoint: string, data: BuildUrlInterface | null): string {
    if (data !== null) {
        return API_URL + endpoint + "?" + data.data.param + "=" + data.data.value;
    }
    return API_URL + endpoint;
}

async function callApi(
    endpoint: string,
    data: SearchByTextorLetterInterface | SingleProductSearchInterface | GetCategoriesInterface | SearchByCategoryInterface |null ): Promise<MealInterface[]> {
    const url = buildApiUrl(endpoint,data);
    const response = await axios.get(url);

    return response.data.meals;
}

export async function getMealById(data: SingleProductSearchInterface): Promise<MealInterface[]>  {
    return await callApi("lookup.php",data);
}

export async function getMealsByCategory (data: SearchByCategoryInterface): Promise<MealInterface[]> {
    return await callApi("filter.php", data);
}

export async function searchMeal(data: SearchByTextorLetterInterface): Promise<MealInterface[]>  {
    return await callApi("search.php", data);
}

export async function getMealCategories(data: GetCategoriesInterface): Promise<CategoriesInterface[]> {
    return await callApi("list.php", data)
}


export async function getMealByIngredients(ingredients: string[]): Promise<MealInterface[]>  {
    for(let ingredient of ingredients) {
        console.log(ingredient)
    }

}
export async function getRandomMeals (amount: number): Promise<MealInterface[]>  {
    const mealPromises = []
    for (let i = 0; i < amount; i++) {
        mealPromises.push(callApi("random.php", null))
    }

    const mealsArray = await Promise.all(mealPromises);
    console.log(mealsArray);
    return mealsArray.flat();
}