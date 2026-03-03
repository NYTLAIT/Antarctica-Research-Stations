import './Checkbox.css'

function Checkbox({ label, name, keys, selectedValues, onChange }) {
    const checkboxes = keys.map(key => {

        const value = typeof key === 'object' ? key.value : key
        const displayLabel = typeof key === 'object' ? key.label : key
        const title = typeof key === 'object' ? key.title : ""
        const id = `${name}-${value}`

        const checkboxSet = e => {
            const newArray = e.target.checked
                ? [...selectedValues, value]
                : selectedValues.filter(v => v !== value)
            onChange(name, newArray)
        }

        return (
            <label 
                key={value} 
                className="checkbox-label" 
                htmlFor={id} 
                title={title}> {displayLabel}
                <input
                    id={id}
                    className="checkbox-input"
                    type="checkbox"
                    name={name}
                    value={value}
                    checked={selectedValues.includes(value)}
                    onChange={checkboxSet}
                />
            </label>
        )
    })

    return (
        <div className="Checkbox">
            {label && <p className="checkbox-group-label">{label}</p>}
            {checkboxes}
        </div>
    )
}

export default Checkbox