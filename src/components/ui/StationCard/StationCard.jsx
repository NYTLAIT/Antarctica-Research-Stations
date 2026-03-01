import './StationCard.css'
import imagePlaceHolder from '../../../assets/images/layout/hero/AirShotSouthPoleStation_NOAAObservatory.jpg'
import data from '../../../stations.json'

function StationCard(
    {id, name, country, image, year_established, status, operator, location, summary}
) {
    let img = null
    if (image) {
        img = image
    } else {
        img = imagePlaceHolder}

    return (
        <div className='StationCard'>
            <img className='stationcard-img' src={img} alt={`image of ${name}`} />
            <h1 className="stationcard-title">{name}</h1>
            <p className="stationcard-country lede">{country}</p>
            <p className="stationcard-summary">{summary}</p>
            
            
        </div>
    )
}

export default StationCard