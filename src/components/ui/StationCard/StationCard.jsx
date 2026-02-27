import './StationCard.css'
import imagePlaceHolder from '../../../assets/images/layout/hero/AirShotSouthPoleStation_NOAAObservatory.jpg'

function StationCard() {
    return (
        <div className='StationCard'>
            <img src={{imagePlaceHolder}}/>

            <div className="stationcard-info">
                <h3>Title</h3>
                <p className="stationcard-country">Country</p>
                <p className="stationcard-yearestablished">MM-DD-YYYY</p>
            </div>
        </div>
    ) 
}

export default StationCard