import {useState} from 'react'
import { createStateUpdater } from '../../../utils/helperFunctions';

import './SearchFilter.css'
import Input from '../../ui/inputs/Input/Input';
import { createStaticHandler } from 'react-router-dom';

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

    // Updating State
    const updateState = createStateUpdater(setFilters)

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

    const zones = [...new Set(stations.map(station => station.location.zone))]
    const regions = [...new Set(stations.map(station => station.location.region))]

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

    return (
        <Input 
            value={filters.query}
            onInput={value => updateState("query", value)} />
    )
}