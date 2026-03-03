import './Checkbox.css'

function Checkbox({ label, name, keys, selectedValues, onChange }) {
    const checkboxes = keys.map(key => {
        const id = `${name}-${key}`

        // take a list of strings
        if (typeof key === 'string') {
        const value = key
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
        }

        //take a list of two key objects {option, title}
        if (typeof key === 'object') {
            const value = key.status
            const title = key.title
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
                        titile={title}
                        checked={selectedValues.includes(value)} //includes checks if array has value and returns bool
                        onChange={(e) => onChange(name, e.target.value, e.target.checked)}
                    />
                </label>
            )
        }
            
    })

    return (
        <div className="Checkbox">
            <p className="checkbox-group-label">{label}</p>
            {checkboxes}
        </div>
    );
}

export default Checkbox;