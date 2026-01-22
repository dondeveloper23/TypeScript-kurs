export function generateYears(from: number, to: number) {
    const selectElement = document.getElementById("movie-year") as HTMLSelectElement;

    for (let i = from; i <= to; i++) {
        const singleYear = document.createElement("option");
        singleYear.value = i.toString();
        singleYear.textContent = i.toString();
        selectElement.append(singleYear);
    }
}