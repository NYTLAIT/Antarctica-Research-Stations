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
    const operators = [...new Set(
        stations.flatMap(station => {
            return station.operators
                .map(operator => operator.abbr)
                .filter(Boolean)
        })
    )]
    return operators
}

export function getZones(stations) {
    const zones = [...new Set(stations.map(station => station.location.zone))]
    return zones
}

export function getRegionsUnderZones(stations, zones) {
    const zonesRegions = zones.map(zone => {
        const regions = [...new Set(
            stations
                .filter(station => station.location.zone === zone)
                .map(station => station.location.region)
        )]

        return {
            zoneName: kebabToDisplay(zone),
            regions: regions
        }
    })
    return zonesRegions
}

export function getPopulationRanges(stations) {
    const winterPopulations = stations.map(station => station.population.winter)
    const summerPopulations = stations.map(station => station.population.summer)
    return {
        winter: {
            min: Math.min(...winterPopulations),
            max: Math.max(...winterPopulations)
        },
        summer: {
            min: Math.min(...summerPopulations),
            max: Math.max(...summerPopulations)
        }
    }
}

export function getResearchFocuses(stations) {
    const researchFocuses = [...new Set(
        stations.flatMap(station => {
            return station.research_focuses.map(focus => focus.tag)
        })
    )]
    return researchFocuses
}