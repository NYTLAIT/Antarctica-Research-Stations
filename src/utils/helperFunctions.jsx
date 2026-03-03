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
        (key, value) => setState(previousState => {
            // key: the field
            // value: the new value

            const keys = key.split(".") // support nested
            if (keys.length > 1) {
                const [parentKey, childKey] = keys
                return {
                    ...previousState,
                    [parentKey]: {...previousState[parentKey], [childKey]: value}
                }
            }

            const currentValue = previousState[key]

            // Range Input /MinMax Input (lit just checks if it an object with min max keys)
            if (typeof currentValue === "object"
                && currentValue !== null 
                && ("min" in currentValue || "max" in currentValue) 
            ) {
                return {
                    ...previousState, 
                    [key]: {...currentValue, ...value}
                }
            }

            // Toggle, Input, direct replacements
            return { ...previousState, [key]: value }
        })
    )
}