import {callApiGames, callApiCategory} from "./services/rawApi";
import {appendCategoriesHtml} from "./helpers/appendCategoriesHtml";
import {userEvents} from "./events/events";
import {initGameDetails} from "./pages/gamedetails";
import {saveSearch} from "./handlers/saveSearch";
import {initSavedSearches} from "./helpers/initSavedSearches";


if (window.location.href.includes("gamedetails.html")) {
    await initGameDetails()
} else {
    await init();
    initSavedSearches()
}


async function init() {
    await appendCategoriesHtml()
    await userEvents()
}

