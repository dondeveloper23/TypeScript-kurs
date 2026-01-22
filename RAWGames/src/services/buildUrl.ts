import {SearchQueryInterface} from "../interfaces/searchQueryInterface";

const API_BASE: string  = "https://api.rawg.io/api/"
const API_KEY: string = "48e17a58850f4567996cccb395ab603b"

export function buildUrl(category:string, searchQuery?: SearchQueryInterface): string {
    let url: string = API_BASE + category + "?key=" + API_KEY;
    if (searchQuery) {
        Object.keys(searchQuery).forEach((key: string) => {
            const k = key as keyof SearchQueryInterface;
            const value = searchQuery[k];

            if (value) {
                url += `&${k}=${value}`;
            }
        })
    }

    return url;
}

console.log(buildUrl("genres", {}))