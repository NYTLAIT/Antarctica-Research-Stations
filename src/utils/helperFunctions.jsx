export function kebabToDisplay(stringKebab) {
    return stringKebab
        // Turn string to array, split at - (will not count that)
        .split("-")
        // Upper case first letter + word.slice(1) everything but first letter
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        // Space between
        .join(" ")
}

export function createStateUpdater(setState) {
    return (
        (field, value, selected) => setState(previousState => {

            currentField = previousState[field]

            // Checkbox
            if (Array.isArray(currentField) && typeof selected === "boolean") {
                return {
                    ...previousState, 
                    [field]: selected // ternary operator | condition: if the field is selected
                        ? [...currentField, value] // 
                        : currentField.filter(element => element !== value)
                };
            }

            if (typeof currentField === "object" 
                && currentField !== null 
                && ("min" in currentField || "max" in currentField)
            ) {
                return {
                    ...previousState, 
                    [field]: {
                        ...currentField,
                        ...other
                    }
                }
            }


            // Toggle 
            if (typeof currentField === "boolean") {
                return {
                    ...previousState, [field]: value   
                }
            }

            // Input
            return {
                ...previousState, [field]: value
            }
        })
    )
}