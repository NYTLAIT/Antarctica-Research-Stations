import './StationsGrid.css'
import data from '../../data/stations.json'
import StationCard from '../../ui/StationCard/StationCard'

function StationsGrid() {
  const station_infos = data.map(station_info => {
    const {
      id,
      name,
      country,
      year_established,
      status,
      operator,
      image,
      location,
      summary
    } = station_info

    const location_name = location.location_name

    return (
      <StationCard
        key={id}
        id={id}
        name={name}
        country={country}
        image={image}
        year_established={year_established}
        status={status}
        operator={operator}
        location_name={location_name}
        summary={summary}
      />
    )
  })

  return <div className="StationsGrid">{station_infos}</div>
}

export default StationsGrid