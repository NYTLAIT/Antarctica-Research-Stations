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

import FilterSection from '../../ui/FilterSection/FilterSection'
import Input from '../../ui/inputs/Input/Input'
import Checkbox from '../../ui/inputs/Checkbox/Checkbox'
import RangeInput from '../../ui/inputs/RangeInput/RangeInput'
import Toggle from '../../ui/inputs/Toggle/Toggle'

function SearchFilter({filters, setFilters}) {
    const { yearRangeMin, yearRangeMax } = getYearRange(stations)

    const updateState = createStateUpdater(setFilters)

    const resetFilters = () => setFilters({
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

    const totalActive =
        filters.countries.length +
        filters.operationalStatuses.length +
        filters.operators.length +
        filters.locations.selected.length +
        filters.researchFocuses.length +
        (filters.yearRange.min != null || filters.yearRange.max != null ? 1 : 0) +
        (filters.population.min != null || filters.population.max != null ? 1 : 0)

    return (
        <div className="SearchFilter">
            <div className="searchfilter-header">
                {totalActive > 0 && (
                    <button className="searchfilter-clear" onClick={resetFilters} type="button">
                        Clear all ({totalActive})
                    </button>
                )}
            </div>


            <div className="searchfilter-query">
                <Input
                    label="Search for a Station"
                    name='query'
                    value={filters.query}
                    onChange={updateState}
                />
            </div>

            <FilterSection label="Operating Country" count={filters.countries.length} defaultOpen>
                <Checkbox
                    name='countries'
                    keys={getCountries(stations)}
                    selectedValues={filters.countries}
                    onChange={updateState}
                />
            </FilterSection>

            <FilterSection label="Operational Status" count={filters.operationalStatuses.length} defaultOpen>
                <Checkbox
                    name='operationalStatuses'
                    keys={operationalStatuses}
                    selectedValues={filters.operationalStatuses}
                    onChange={updateState}
                />
            </FilterSection>

            <FilterSection label="Research Focus" count={filters.researchFocuses.length} defaultOpen>
                <Checkbox
                    name='researchFocuses'
                    keys={getResearchFocuses(stations)}
                    selectedValues={filters.researchFocuses}
                    onChange={updateState}
                />
            </FilterSection>

            <FilterSection label="Year Established" count={filters.yearRange.min != null || filters.yearRange.max != null ? 1 : 0}>
                <RangeInput
                    name='yearRange'
                    min={yearRangeMin}
                    max={yearRangeMax}
                    selectedMin={filters.yearRange.min}
                    selectedMax={filters.yearRange.max}
                    onChange={updateState}
                />
            </FilterSection>

            <FilterSection label="Operator" count={filters.operators.length}>
                <Checkbox
                    name='operators'
                    keys={getOperators(stations)}
                    selectedValues={filters.operators}
                    onChange={updateState}
                />
            </FilterSection>

            <FilterSection label="Location" count={filters.locations.selected.length}>
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
            </FilterSection>

            <FilterSection label="Population" count={filters.population.min != null || filters.population.max != null ? 1 : 0}>
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
                    name="population"
                    min={getPopulationRanges(stations)[filters.population.season].min}
                    max={getPopulationRanges(stations)[filters.population.season].max}
                    selectedMin={filters.population.min}
                    selectedMax={filters.population.max}
                    onChange={updateState}
                />
            </FilterSection>

            <FilterSection label="Year-Round or Seasonal">
                <Toggle
                    label="Year-Round | Seasonal"
                    name='winterCrew'
                    checked={filters.winterCrew}
                    onChange={updateState}
                />
            </FilterSection>

        </div>
    )
}

export default SearchFilter