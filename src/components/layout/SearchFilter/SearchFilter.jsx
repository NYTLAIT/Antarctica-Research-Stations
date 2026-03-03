import { useState } from 'react'
import { createStateUpdater } from '../../../utils/helperFunctions'
import {
    getCountries,
    getYearRange,
    getOperators,
    getZones,
    getRegionsUnderZones,
    getPopulationRanges,
    getResearchFocuses
} from '../../../utils/filterOptionsDynamic'
import { operationalStatuses } from '../../../constants/filterOptionsStatic'
import stations from '../../../stations.json'

import './SearchFilter.css'
import Input from '../../ui/inputs/Input/Input'
import Checkbox from '../../ui/inputs/Checkbox/Checkbox'
import RangeInput from '../../ui/inputs/RangeInput/RangeInput'
import Toggle from '../../ui/inputs/Toggle/Toggle'

function SearchFilter() {
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

    const { yearRangeMin, yearRangeMax } = getYearRange(stations)
    const updateState = createStateUpdater(setFilters)

    return (
        <div className="SearchFilter">

            <Input
                label="Search for a Station"
                name='query'
                value={filters.query}
                onChange={updateState}
            />

            <Checkbox
                label="Operating Country"
                name='countries'
                keys={getCountries(stations)}
                selectedValues={filters.countries}
                onChange={updateState}
            />

            <RangeInput
                label="Year Established"
                name='yearRange'
                min={yearRangeMin}
                max={yearRangeMax}
                selectedMin={filters.yearRange.min}
                selectedMax={filters.yearRange.max}
                onChange={updateState}
            />

            <Checkbox
                label="Operational Status"
                name='operationalStatuses'
                keys={operationalStatuses}
                selectedValues={filters.operationalStatuses}
                onChange={updateState}
            />

            <Toggle
                label="Year-Round | Seasonal"
                name='winterCrew'
                checked={filters.winterCrew}
                onChange={updateState}
            />

            <Checkbox
                label="Operator"
                name='operators'
                keys={getOperators(stations)}
                selectedValues={filters.operators}
                onChange={updateState}
            />

            {/* Location mode toggle — dot notation handled by createStateUpdater */}
            <Toggle
                label="View by: Zone | Region"
                name='locations.mode'
                checked={filters.locations.mode === "region"}
                onChange={(name, isRegion) => {
                    updateState("locations", {
                        mode: isRegion ? "region" : "zone",
                        selected: []
                    })
                }}
            />

            {filters.locations.mode === "zone" && (
                <Checkbox
                    label="Zones"
                    name="locations.selected"
                    keys={getZones(stations)}
                    selectedValues={filters.locations.selected}
                    onChange={updateState}
                />
            )}

            {filters.locations.mode === "region" && (
                <div className="region-zones">
                    {getRegionsUnderZones(stations).map(group => (
                        <div key={group.zone.value} className="region-zone">
                            <p className="region-zone-title">{group.zone.label}</p>
                            <Checkbox
                                name="locations.selected"
                                keys={group.regions}
                                selectedValues={filters.locations.selected}
                                onChange={updateState}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Population season toggle — dot notation keeps min/max in sync */}
            <Toggle
                label="Season: Winter | Summer"
                name='population.season'
                checked={filters.population.season === "summer"}
                onChange={(name, isSummer) => {
                    updateState("population", {
                        season: isSummer ? "summer" : "winter",
                        min: null,
                        max: null
                    })
                }}
            />

            <RangeInput
                label="Population"
                name="population"
                min={getPopulationRanges(stations)[filters.population.season].min}
                max={getPopulationRanges(stations)[filters.population.season].max}
                selectedMin={filters.population.min}
                selectedMax={filters.population.max}
                onChange={updateState}
            />

            <Checkbox
                label="Research Focus"
                name='researchFocuses'
                keys={getResearchFocuses(stations)}
                selectedValues={filters.researchFocuses}
                onChange={updateState}
            />

        </div>
    )
}

export default SearchFilter