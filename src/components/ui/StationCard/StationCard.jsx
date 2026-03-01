import './StationCard.css'
import imagePlaceHolder from '../../../assets/images/layout/hero/AirShotSouthPoleStation_NOAAObservatory.jpg'

function StationCard(
    {id, name, country, images, year_established, status, operators, location, summary}
) {
    
    const img = imagePlaceHolder
    // const img = images?.[0]?.image ?? imagePlaceHolder
    
    const operatorString = operators?.length
        ? operators.map(operator => operator.abbr || '...').join(' | ')
        : 'Unknown operator'

   const stationIsActive = status.is_active

    return (
        <div className='StationCard'>
            <img className='station-img' src={img} alt={`image of ${name}`} />

            <h2 className='station-title'>{name}</h2>
            <p className='station-country lede'>{country}</p>

            <p className='station-summary'>{summary}</p>

            <div className='station-operation-status'>
                <p className='station-operator'>{`Operated by: ${operatorString}`}</p>
                <p
                    className={`station-activity ${stationIsActive ? 'active' : 'inactive'}`}>
                    {stationIsActive ? 'Active' : 'Inactive'}
                </p>
            </div>
        </div>
    )
}

export default StationCard