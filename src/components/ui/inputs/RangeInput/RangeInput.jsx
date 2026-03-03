import './Slider.css'

function RangeInput({label, name, min, max, selectedMin, selectedMax, onInput}) {   
    return (
        <div className="RangeInput">
            <label className="rangeinput-label" htmlFor={id}>
                {label}
                <label htmlFor={`${name}-min`}>
                    Min:
                    <input
                        id={`${name}-min`}
                        className="rangeinput-min"
                        type="number"
                        min={min}
                        max={selectedMax}
                        value={selectedMin}
                        onInput={e => onInput(name, {min: e.target.value})}
                    />
                </label>
                <p>-</p>
                <label htmlFor={`${name}-max`}>
                    Max:
                    <input
                        id={`${name}-max`}
                        className="rangeinput-max"
                        type="number"
                        min={selectedMin}
                        max={max}
                        value={selectedMax}
                        onInput={e => onInput(name, {max: e.target.value})}
                    />
                </label>
            </label>
        </div>
    )
}

export default RangeInput