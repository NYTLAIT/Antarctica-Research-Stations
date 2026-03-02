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

    return (
        <Input 
            value={filters.query}
            onInput={value => updateState("query", value)} />
    )
}