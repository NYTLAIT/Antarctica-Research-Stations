import './StationsGrid.css'
import data from '../../../stations.json'
import StationCard from '../../ui/StationCard/StationCard'

// year established and location included for filter -- year established impltimented nowm location for later
function StationsGrid() {
  const station_infos = data.map(station_info => {
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
    } = station_info

    return (
      <StationCard
        key={id}
        id={id}
        name={name}
        country={country}
        images={images}
        year_established={year_established}
        status={status}
        operators={operators}
        location={location}
        summary={summary}
      />
    )
  })

  return <div className="StationsGrid">{station_infos}</div>
}


export default StationsGrid