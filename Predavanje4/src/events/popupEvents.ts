import {closePopupHandler} from "../handlers/closePopupHandler";

export function popupEvents():void {
    const popup = document.getElementById("single-movie-popup") as HTMLDivElement;


    popup.addEventListener("click", closePopupHandler)
}