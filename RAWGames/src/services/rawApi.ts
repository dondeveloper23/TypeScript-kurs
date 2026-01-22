import {buildUrl} from "./buildUrl";
import axios from "axios";
import {SearchQueryInterface} from "../interfaces/searchQueryInterface";
import {GameInterface} from "../interfaces/GameInterface";
import {GenresInterface} from "../interfaces/GenresInterface";


export async function callApiGames(searchQuery: SearchQueryInterface): Promise<GameInterface[]> {
    let url: string = buildUrl("games", searchQuery);
    const response = await axios.get(url);
    return response.data.results as GameInterface[];
}

export async function callApiGame(id: string): Promise<GameInterface> {
    let url: string = buildUrl(`games/${id}`);
    const response = await axios.get(url);
    return response.data as GameInterface;
}

export async function callApiCategory(searchQuery: SearchQueryInterface): Promise<GenresInterface[]> {
    let url: string = buildUrl("genres", searchQuery);
    const response = await axios.get(url);
    return response.data.results as GenresInterface[];
}