type Player = "police" | "terrorist"

interface Game {
    mode: "DR" | "COD" | "jailbreak",
    team: Player,
    round: number
}

const game: Game = {
    mode: "DR",
    team: "police",
    round: 5,
}