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
        (key, value, selected) => setState(previousState => {
            // key: the field
            // value: the new value
            // selected: boolean (specifically to check which checkbox field is being touched, becomes undefined otherwise)

            const currentKey = previousState[key] // currentKey is the key being modified or looked at or changed
                                            // contains same structure as key: value, where value is the keys value
                                            // untouched

            // Checkbox ([key]: list) 
            if (Array.isArray(currentKey) 
                && typeof selected === "boolean"
            ) { 
                return {
                    ...previousState, 
                    [key]: selected // ternary operator | condition: if the key is selected
                        ? [...currentKey, value] // set key to have that value
                        : currentKey.filter(element => element !== value)
                };
            }

            // Range Input /MinMax Input (lit just checks if it an object with min max keys)
            if (typeof currentKey === "object"
                && currentKey !== null 
                && ("min" in currentKey || "max" in currentKey) 
            ) {
                return {
                    ...previousState, 
                    [key]: {
                        ...currentKey,
                        ...value
                    }
                }
            }

            // Toggle ([key]: boolean)
            if (typeof currentKey === "boolean") {
                return {
                    ...previousState, [key]: value 
                }
            }

            // Input ([key]: str/int/custom toggle)
            return {
                ...previousState, [key]: value
            }
        })
    )
}