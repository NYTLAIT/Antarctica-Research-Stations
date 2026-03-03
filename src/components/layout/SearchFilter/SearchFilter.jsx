import {useState} from 'react'
import { createStateUpdater } from '../../../utils/helperFunctions';
import { getCountries, getYearRange } from '../../../utils/filterOptionsDynamic';
import stations from '../../../stations.json'

import './SearchFilter.css'
import Input from '../../ui/inputs/Input/Input';
import Checkbox from '../../ui/inputs/Checkbox/Checkbox';
import RangeInput from '../../ui/inputs/RangeInput/RangeInput';
import Toggle from '../../ui/inputs/Toggle/Toggle';

function SearchFilter() {
    const [filters, setFilters] = useState({
    // Available filter values (population.season true=winter | false=summer)
        query: "",
        countries: [],
        yearRange: {min: null, max: null},
        operationalStatuses: [],
        winterCrew: true,
        operators: [],
        locations: [],
        population: {season: true, min: null, max: null},
        researchFocuses: []
    })
    // Render nested dynamic functions
    const { yearRangeMin, yearRangeMax } = getYearRange(stations)

    // Updating State
    const updateState = createStateUpdater(setFilters)

    return (
        <div className="SearchFilter">
        {/* Query */}
            <Input 
                label="Search for a Station"
                name='query'
                value={filters.query}
                onInput={updateState}
                />
        {/* Country */}
            <Checkbox 
                label="Operating Country"
                name='countries'
                values={getCountries(stations)}
                selectedValues={filters.countries}
                onChange={updateState}
                />
        {/* Year Established Range */}
            <RangeInput
                label="Year Established"
                name='yearRange'
                min={yearRangeMin}
                max={yearRangeMax}
                selectedMin={filters.yearRange.min}
                selectedMax={filters.yearRange.max}
                onInput={updateState}
                />
        {/* Operational Status */}
            <Checkbox 
                label="Operational Status"
                name='operationalStatuses'
                values={}
                selectedValues={filters.operationalStatuses}
                />
        {/* Year-Round or Seasonal */}
            <Toggle 
                label="Year-Round | Seasonal"
                name='winterCrew'
                checked={filters.winterCrew}
                onChange={updateState}
                />
            
        </div>
    )
        
}