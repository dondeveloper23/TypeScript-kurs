export function fillSelectWithOptions(elementId: string, data: any): void {
    const select = document.getElementById(elementId) as HTMLSelectElement

    data.forEach(option => {
        const selectOption = document.createElement("option") as HTMLOptionElement;
        const optionData = buildValueAndTextBasedOnType(option)

        selectOption.value = optionData.value
        selectOption.innerText = optionData.text;
        select.append(selectOption);
    })
}

function buildValueAndTextBasedOnType(option): {value: string, text: string } {
    if (typeof option.strCategory === "string") {
        return {
            value: option.strCategory,
            text: option.strCategory
        }
    } else if(typeof option.strIngredient === "string") {
        return {
            value: option.idIngredient,
            text: option.strIngredient
        }
    } else if (typeof option.strArea === "string") {
        return {
            value: option.strArea,
            text: option.strArea
        }
    }
}