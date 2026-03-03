import './StationCard.css'
import imagePlaceHolder from '../../../assets/images/stations/defaultImage_PalmerStation_MountFrancais.jpg'

function StationCard(
    {id, name, country, images, year_established, status, operators, location, summary}
) {
    
    const img = imagePlaceHolder
    // const img = images?.[0]?.image ?? imagePlaceHolder
    
    const operatorString = operators?.length
        ? operators.map(operator => operator.abbr || '...').join(' | ')
        : 'Unknown operator'

   const stationIsActive = status?.is_active

    return (
        <div className='StationCard'>
            <img className='station-image' src={img} alt={`image of ${name}`} />

            <div className="station-card-info">
                <div className="station-card-identifier">
                    <h2 className='station-card-title'>{name}</h2>
                    <p className='station-card-country lede'>{country}</p>
                </div>

                <p className='station-card-summary'>{summary}</p>

                <div className='station-card-operation-status'>
                    <p className='station-card-operator'>{`Operated by: ${operatorString}`}</p>
                    <p
                        className={`station-card-activity ${stationIsActive ? 'active' : 'inactive'}`}>
                        {stationIsActive ? 'Active' : 'Inactive'}
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default StationCard