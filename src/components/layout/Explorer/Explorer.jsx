import {useState} from 'react'
import stations from '../../../stations.json'

import './Explorer.css'
import SearchFilter from '../SearchFilter/SearchFilter'
import StationsGrid from '../StationsGrid/StationsGrid'

function Explorer() {
    const [filters, setFilters] = useState({
        query: "",
        countries: [],
        yearRange: { min: null, max: null },
        operationalStatuses: [],
        winterCrew: true,
        operators: [],
        locations: { mode: "zone", selected: [] },
        population: { season: "winter", min: null, max: null },
        researchFocuses: []
    })

    const filteredStations = stations.filter(station => {

        const matchesQuery = !filters.query
            ? true
            : [station.name, station.summary, station.description, ...station.country]
                .some(val => val.toLowerCase().includes(filters.query.toLowerCase()))

        const matchesCountries = filters.countries.length === 0
            ? true
            : station.country.some(c => filters.countries.includes(c))

        const matchesYearRange =
            (filters.yearRange.min === null || station.year_established >= filters.yearRange.min) &&
            (filters.yearRange.max === null || station.year_established <= filters.yearRange.max)

        const matchesOperationalStatuses = filters.operationalStatuses.length === 0
            ? true
            : filters.operationalStatuses.includes(station.status.operational_status)

        const matchesWinterCrew = !filters.winterCrew
            ? true
            : station.population.winter > 0

        const matchesOperators = filters.operators.length === 0
            ? true
            : station.operators.some(o => filters.operators.includes(o.abbr))

        const matchesLocation = filters.locations.selected.length === 0
            ? true
            : filters.locations.mode === "zone"
                ? filters.locations.selected.includes(station.location.zone)
                : filters.locations.selected.includes(station.location.region)

        const matchesPopulation = !filters.population.season
            ? true
            : (filters.population.min === null || station.population[filters.population.season] >= filters.population.min) &&
            (filters.population.max === null || station.population[filters.population.season] <= filters.population.max)

        const matchesResearchFocuses = filters.researchFocuses.length === 0
            ? true
            : station.research_focuses.some(f => filters.researchFocuses.includes(f.tag))

        return (
            matchesQuery &&
            matchesCountries &&
            matchesYearRange &&
            matchesOperationalStatuses &&
            matchesWinterCrew &&
            matchesOperators &&
            matchesLocation &&
            matchesPopulation &&
            matchesResearchFocuses
        )
    })

    return (
        <div className="Explorer">
            <SearchFilter
                filters={filters}
                setFilters={setFilters}/>
            <StationsGrid
                filteredStations={filteredStations}/>
        </div>
    )
}

export default Explorer