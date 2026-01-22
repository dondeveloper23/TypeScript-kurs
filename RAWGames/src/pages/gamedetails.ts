import {callApiGame} from "../services/rawApi";
import {appendGameDetails} from "../helpers/appendGameDetails";

export async function initGameDetails() {
    const queryString: string = window.location.search;
    const urlParams: URLSearchParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const gameDetails = document.querySelector("#game-details") as HTMLDivElement;


    const game = await callApiGame(String(id))
    appendGameDetails(game, gameDetails)
}

