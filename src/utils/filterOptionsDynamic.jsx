import { kebabToDisplay } from "./helperFunctions"

function rawZones(stations) {
    return [...new Set(stations.map(station => station.location?.zone))].filter(Boolean)
}

export function getCountries(stations) {
    const countries = [...new Set(stations
        .flatMap(station => station.country))]
        .filter(Boolean)
        .sort()
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
    return stations
        .flatMap(station => 
            station.operators?.map(operator => ({
                value: operator.abbr,
                label: operator.abbr,
                title: operator.full
            })).filter(Boolean) ?? []
        )
        .filter((operator, index, theArray) => 
            index === theArray.findIndex(object => object.value === operator.value)
        )
        .sort((a, b) => a.value.localeCompare(b.value))
    
}

export function getZones(stations) {
    return rawZones(stations)
        .map(zone => ({
            value: zone, 
            label: kebabToDisplay(zone)
    })).sort((a, b) => a.label.localeCompare(b.label))
}

export function getRegionsUnderZones(stations) {
    return rawZones(stations).map(zone => {

        const rawRegions = [...new Set(stations
                .filter(station => station.location?.zone === zone)
                .map(station => station.location?.region)
                .filter(Boolean)
        )].sort()

        return {
            zone: {
                value: zone,
                label: kebabToDisplay(zone)
            },
            regions: rawRegions.map(region => ({
                value: region,
                label: kebabToDisplay(region)
            }))
        }
    })
}

export function getPopulationRanges(stations) {
    const winterPopulations = stations.map(station => station.population?.winter).filter(Boolean)
    const summerPopulations = stations.map(station => station.population?.summer).filter(Boolean)
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
            return station.research_focuses
                ?.map(focus => focus.tag)
                .filter(Boolean) ?? []
        })
    )].sort()
    return researchFocuses
}