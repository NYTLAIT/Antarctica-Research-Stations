import { kebabToDisplay } from "./helperFunctions"

export function getCountries(stations) {
    const countries = [...new Set(stations.flatMap(station => station.country))]
    return countries
} 

export function getYearRange(stations) {
    const yearRange = stations.map(station => station.year_established)
    return {
        yearRangeMin: Math.min(...yearRange),
        yearRangeMax: Math.max(...yearRange)
    }
}

export function getOperators(stations) {
    const operators = []
    const knownOperators = new Set()
    stations.forEach(station => {
        station.operators.forEach(operator => {
            if (operator.abbr && !knownOperators.has(operator.abbr)) {// Filter: ! -> bool, .has => if has
                knownOperators.add(operator.abbr) // Track
                operators.push({ abbr: operator.abbr, title: operator.full }) // Add to actual if pass
            }
        })
    })
    return operators
}

export function getZones(stations) {
    const zones = [...new Set(stations.map(station => station.location.zone))]
    return zones
}

export function getRegionsUnderZones(stations, zones) {
    const zones_regions = zones.map(zone => {
        const regions = [...new Set(
            stations
                .filter(station => station.location.zone === zone)
                .map(station => station.location.region)
        )]

        return {
            zone_name: kebabToDisplay(zone),
            regions: regions
        }
    })
    return zones_regions
}


const winterPopulations = stations.map(station => station.population.winter);
const summerPopulations = stations.map(station => station.population.summer);
const winterMin = Math.min(...winterPopulations);
const winterMax = Math.max(...winterPopulations);
const summerMin = Math.min(...summerPopulations);
const summerMax = Math.max(...summerPopulations);

const researchFocuses = []
const knownResearchFocuses = new Set()
stations.forEach(station => {
    station.research_focuses.forEach(focus => {
        if (!knownResearchFocuses.has(focus.tag)) {
            knownResearchFocuses.add(focus.tag)
            researchFocuses.push(focus)
        }
    })
})