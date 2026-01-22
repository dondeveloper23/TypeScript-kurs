import {MealInterface} from "../interfaces/MealInterface";

export function showMeal(parent: string, data: MealInterface[]): void {
    const parentElement = document.getElementById(parent) as HTMLElement;

    data.forEach(meal => {
        console.log(meal);
        const mealHolder = document.createElement("div") as HTMLElement;
        const mealTitle = document.createElement("h2") as HTMLHeadingElement
        const mealImg = document.createElement("img");
        mealImg.src = meal.strMealThumb; // Slika sa API-ja
        mealHolder.prepend(mealImg);
        mealTitle.innerText = meal.strMeal
        mealHolder.appendChild(mealTitle);
        parentElement.appendChild(mealHolder);
    })
}