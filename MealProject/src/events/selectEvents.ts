
import {searchMealHandler} from "../handlers/searchMealButtonHandler";

export function hookSelectEvents() {

    const searchMeals = document.getElementById("searchMeals") as HTMLButtonElement;


    searchMeals.addEventListener("click", searchMealHandler)
}