import {generateYears} from "./helpers/yearGeneratorHelper";
import {renderPreviousSearches} from "./ui/renderPreviousSearch";
import {bindSearchEvents} from "./events/searchEvents";
import {popupEvents} from "./events/popupEvents";

function init(): void {

    generateYears(1970, 2025)
    renderPreviousSearches();
    bindSearchEvents();
    popupEvents()
}

init()