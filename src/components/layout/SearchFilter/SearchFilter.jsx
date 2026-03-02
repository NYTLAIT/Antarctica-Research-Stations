import {useState} from 'react'

import './SearchFilter.css'

function SearchFilter({stations}) {
    const [filters, setFilters] = useState({
    // Available filter values
        query: "",
        country: [],
        yearRange: {min: null, max: null},
        operationalStatus: [],
        winterCrew: null,
        operator: [],
        location: [],
        population: {season: null, min: null, max: null},
        researchFocus: []
    })

    // Dynamically set option values
    const countries = [...new Set(stations.flatMap(station => station.country))]

    const yearRange = stations.map(station => station.year_established)
    const yearMin = Math.min(...yearRange)
    const yearMax = Math.max(...yearRange)

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

    // Hard code option values
    const operationalStatuses = [
        {status: "planned", title: "Station approved/proposed"},
        {status: "under construction", title: "Actively being built; not operational" },
        {status: "operational", title: "Built and actively functioning" },
        {status: "decommissioned", title: "Formally closed; operations permanently ceased" },
        {status: "abandoned", title: "Informally or historically deserted" },
    ]
}
