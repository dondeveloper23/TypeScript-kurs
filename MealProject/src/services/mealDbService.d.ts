import { MealInterface } from "../interfaces/MealInterface";
import { SearchByTextorLetterInterface } from "../interfaces/SearchByTextorLetterInterface";
import { SingleProductSearchInterface } from "../interfaces/SingleProductSearchInterface";
import { GetCategoriesInterface } from "../interfaces/GetCategoriesInterface";
import { CategoriesInterface } from "../interfaces/CategoriesInterface";
import { SearchByCategoryInterface } from "../interfaces/searchByCategoryInterface";
export declare function getMealById(data: SingleProductSearchInterface): Promise<MealInterface[]>;
export declare function getMealsByCategory(data: SearchByCategoryInterface): Promise<MealInterface[]>;
export declare function searchMeal(data: SearchByTextorLetterInterface): Promise<MealInterface[]>;
export declare function getMealCategories(data: GetCategoriesInterface): Promise<CategoriesInterface[]>;
export declare function getMealByIngredients(ingredients: string[]): Promise<MealInterface[]>;
export declare function getRandomMeals(amount: number): Promise<MealInterface[]>;
//# sourceMappingURL=mealDbService.d.ts.map