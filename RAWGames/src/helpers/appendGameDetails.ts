import {GameInterface} from "../interfaces/GameInterface";

export function appendGameDetails(game: GameInterface, element: HTMLDivElement) {
    // Čistimo loader ili prethodni sadržaj
    element.innerHTML = "";

    // Pravimo strukturu sa brdom podataka
    element.innerHTML = `
        <div class="game-details-wrapper">
            <div class="game-hero" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('${game.background_image}')">
                <h1>${game.name}</h1>
                <div class="game-meta-top">
                    <span class="rating">⭐ ${game.rating}/5</span>
                    <span class="release-date">Released: ${game.released}</span>
                </div>
            </div>

            <div class="game-content-grid">
                <div class="game-description">
                    <h3>About</h3>
                    <p>${game.description_raw || "No description available."}</p>
                </div>

                <div class="game-info-panel">
                    <div class="info-item">
                        <h4>Platforms</h4>
                        <p>${game.platforms?.map(p => p.platform.name).join(", ") || "N/A"}</p>
                    </div>

                    <div class="info-item">
                        <h4>Genres</h4>
                        <p>${game.genres?.map(g => g.name).join(", ") || "N/A"}</p>
                    </div>

                    <div class="info-item">
                        <h4>Developers</h4>
                        <p>${game.developers?.map(d => d.name).join(", ") || "N/A"}</p>
                    </div>

                    <div class="info-item">
                        <h4>Publishers</h4>
                        <p>${game.publishers?.map(pub => pub.name).join(", ") || "N/A"}</p>
                    </div>

                    ${game.website ? `
                        <div class="info-item">
                            <h4>Website</h4>
                            <a href="${game.website}" target="_blank" class="site-link">Official Website</a>
                        </div>
                    ` : ""}
                </div>
            </div>
        </div>
    `;
}