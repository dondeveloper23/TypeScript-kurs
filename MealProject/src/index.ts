import {hookSelectEvents} from "./events/selectEvents";
import {getMealCategories, getRandomMeals} from "./services/mealDbService";
import {fillSelectWithOptions} from "./helpers/htmlSelectHelper";
import {showMeal} from "./helpers/showMealHelper";


async function main() {
    hookSelectEvents()

    const categories = await getMealCategories({data: {param: 'c', value: 'list'}})
    const ingredients = await getMealCategories({data: {param: 'i', value: 'list'}})
    const areas = await getMealCategories({data: {param: 'a', value: 'list'}})
    fillSelectWithOptions("categorySelect", categories);
    fillSelectWithOptions("ingredientSelect", ingredients);
    fillSelectWithOptions("areaSelect", areas);
    const randomMeals = await getRandomMeals(3);
    console.log(randomMeals);
    showMeal("randomMeals", randomMeals);
}

main()