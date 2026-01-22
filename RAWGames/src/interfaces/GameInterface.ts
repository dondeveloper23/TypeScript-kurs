export interface GameInterface {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    released: string;
    metacritic: number | null;
    playtime: number;

    // NOVI PODACI ZA DETALJNU STRANICU
    description_raw?: string; // Koristimo ? jer lista igara ovo nema, samo detalji
    website?: string;

    // Nizovi objekata za platforme, žanrove itd.
    platforms?: {
        platform: {
            id: number;
            name: string;
            slug: string;
        };
    }[];

    genres?: {
        id: number;
        name: string;
    }[];

    developers?: {
        id: number;
        name: string;
    }[];

    publishers?: {
        id: number;
        name: string;
    }[];

    short_screenshots?: {
        id: number;
        image: string;
    }[];
}