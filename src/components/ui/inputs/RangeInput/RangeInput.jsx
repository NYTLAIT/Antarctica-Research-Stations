import './RangeInput.css'

function RangeInput({ label, name, min, max, selectedMin, selectedMax, onChange }) {
    return (
        <div className="RangeInput">
            <p className="rangeinput-label">{label}</p>
            <div className="rangeinput-inputs">
                <label htmlFor={`${name}-min`}>
                    Min:
                    <input
                        id={`${name}-min`}
                        className="rangeinput-min"
                        type="number"
                        min={min}
                        max={selectedMax ?? max}
                        value={selectedMin ?? ""}
                        onChange={e => onChange(name, { min: Number(e.target.value) })}
                    />
                </label>
                <span>–</span>
                <label htmlFor={`${name}-max`}>
                    Max:
                    <input
                        id={`${name}-max`}
                        className="rangeinput-max"
                        type="number"
                        min={selectedMin ?? min}
                        max={max}
                        value={selectedMax ?? ""}
                        onChange={e => onChange(name, { max: Number(e.target.value) })}
                    />
                </label>
            </div>
        </div>
    )
}

export default RangeInput