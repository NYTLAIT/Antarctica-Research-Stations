import './StationCard.css'
import imagePlaceHolder from '../../../assets/images/layout/hero/AirShotSouthPoleStation_NOAAObservatory.jpg'
import data from '../../../stations.json'

function StationCard(
    {id, name, country, image, year_established, status, operator, location, summary}
) {
    return (
        <div className='StationCard'>
            <img className='stationcard-img' src={image} alt={`image of ${name}`} />
            <h1 className="stationcard-title">{name}</h1>
            <div>
                <p className="stationcard-country lede">{country}</p>
                <p className="stationcard-country lede">{country}</p>
            </div>
            
            
            
        </div>
    )
}

export default StationCard