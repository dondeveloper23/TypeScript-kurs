import {GameInterface} from "../interfaces/GameInterface";

export function appendGamesHtml(games: GameInterface[]) {
    const gameContainer = document.getElementById('game-container') as HTMLElement;
    gameContainer.innerHTML = '';
    games.forEach(game => {

        const gameDiv = document.createElement('div') as HTMLDivElement;
        gameDiv.classList = 'game-wrapper';
        gameDiv.setAttribute("id", String(game.id))
        const img = document.createElement('img') as HTMLImageElement;
        img.src = game.background_image
        const title = document.createElement('h2');
        title.textContent = game.name;
        const rating = document.createElement('span') as HTMLSpanElement;
        const ratingText = document.createElement('span') as HTMLSpanElement;
        rating.textContent = String(game.rating)
        ratingText.textContent = "Rating"
        gameDiv.append(img, title, ratingText, rating);
        gameDiv.addEventListener("click", () => {
            console.log(game.id);
            window.location.href = `./gamedetails.html?id=${game.id}`;
        })
        gameContainer.appendChild(gameDiv);


    })
}