import './Toggle.css'

function Toggle({label, name, checked, onChange}) {
    return (
        <div className="Toggle">
            <label htmlFor="" className="slider-label">
                {label}
                <input
                    id={name}
                    className="toggle-input" 
                    type="checkbox" 
                    checked={checked}
                    onChange={e => onChange(name, e.target.checked)}
                    />
            </label>
        </div>
    )
}

export default Toggle