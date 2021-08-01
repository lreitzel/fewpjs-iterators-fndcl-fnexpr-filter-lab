// Code your solution here
function findMatching(array, name) {
    return array.filter ( match =>
        match.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch(array, sample) {
    return array.filter( maybeMatch =>
        maybeMatch.toLowerCase().indexOf(sample.toLowerCase()) === 0
    )
}

function matchName(array, name) {
    return array.filter( record => record.name === name)
}