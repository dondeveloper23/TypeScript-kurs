export function closePopupHandler(e: any): void {
    const popupInner = document.getElementById("singleMoviePopupInner") as HTMLDivElement;
    const popup = document.getElementById("single-movie-popup") as HTMLDivElement;

    if (e.target === popup) {
        popup.style.display = "none";
    }
}