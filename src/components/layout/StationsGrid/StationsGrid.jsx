import './StationsGrid.css'
import stations from '../../../stations.json'
import StationCard from '../../ui/StationCard/StationCard'

// year established and location included for filter -- year established impltimented nowm location for later
function StationsGrid({filteredStations}) {
    const stationInfos = filteredStations.map(stationInfo => {
        const {
            id,
            name,
            country,
            images,
            year_established,
            status,
            operators,
            location,
            summary
        } = stationInfo

        return (
            <StationCard
                key={id}
                id={id}
                name={name}
                country={country}
                images={images}
                yearEstablished={year_established}
                status={status}
                operators={operators}
                location={location}
                summary={summary}
            />
        )
    })

    return <div className="StationsGrid">{stationInfos}</div>
}

export default StationsGrid