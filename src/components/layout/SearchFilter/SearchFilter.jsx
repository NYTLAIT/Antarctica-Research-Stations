import {useState} from 'react'
import { createStateUpdater } from '../../../utils/helperFunctions';
import { getCountries } from '../../../utils/filterOptionsDynamic';
import stations from '../../../stations.json'

import './SearchFilter.css'
import Input from '../../ui/inputs/Input/Input';
import Checkbox from '../../ui/inputs/Checkbox/Checkbox';

function SearchFilter() {
    const [filters, setFilters] = useState({
    // Available filter values
        query: "",
        countries: [],
        yearRange: {min: null, max: null},
        operationalStatuses: [],
        winterCrew: null,
        operators: [],
        locations: [],
        population: {season: null, min: null, max: null},
        researchFocuses: []
    })

    // Updating State
    const updateState = createStateUpdater(setFilters)

    return (
        <div className="SearchFilter">
            <Input 
                label="Search for a Station"
                name='query'
                value={filters.query}
                onInput={updateState}
                />
            <Checkbox 
                label="Choose country"
                name='countries'
                values={getCountries(stations)}
                selectedValues={filters.countries}
                onChange={updateState}
                />
        </div>
    )
        
}