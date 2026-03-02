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
        (value, field) => setState(previousState => {
            return {
                ...previousState, [field]: value
            }
        })
    )
};