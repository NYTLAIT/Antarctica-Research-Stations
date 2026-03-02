import './Checkbox.css'

function Checkbox({ label, name, values, selectedValues, onChange }) {
    const checkboxes = values.map(value => {
        const id = `${name}-${value}`

        return (
            <label
                key={value}
                className="checkbox-label"
                htmlFor={id}
            > {value}
                <input
                    id={id}
                    className="checkbox-input"
                    type="checkbox"
                    name={name}
                    value={value}
                    checked={selectedValues.includes(value)} //includes checks if array has value and returns bool
                    onChange={(e) => onChange(name, e.target.value, e.target.checked)}
                />
            </label>
        )
    })

    return (
        <div className="Checkbox">
            <p className="checkbox-group-label">{label}</p>
            {checkboxes}
        </div>
    );
}

export default Checkbox;