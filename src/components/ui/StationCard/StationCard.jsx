import './StationCard.css'
import imagePlaceHolder from '../../../assets/images/layout/hero/AirShotSouthPoleStation_NOAAObservatory.jpg'

function StationCard(
    {id, name, country, image, year_established, status, operators, location, summary}
) {
    
    let img = null
    if (image) {
        img = imagePlaceHolder
    } else {
        img = imagePlaceHolder}
    
    const operatorString = trim(operators.reduce((operator, string) => string + `${operator} `,''))

    let operationStatusActivity = null
    let operationStatusColor = null
    if (status['is_active']) {
        operationStatusActivity = "active"
        operationStatusColor = 'color: var(--text-main)'
    } else {
        operationStatusActivity = "inactive"
        operationStatusColor = 'color: var(--text-secondary)'}

    return (
        <div className='StationCard'>
            <img className='station-img' src={img} alt={`image of ${name}`} />
            <h2 className='station-title'>{name}</h2>
            <p className='station-country lede'>{country}</p>
            <p className='station-summary'>{summary}</p>
            <div className='station-operation-status'>
                <p className='station-operator'>{operatorString}</p>
                <p className='station-activity' style={operationStatusColor}>
                    {operationStatusActivity}
                </p>
            </div>
        </div>
    )
}

export default StationCard