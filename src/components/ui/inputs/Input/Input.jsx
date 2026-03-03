import './Input.css'

function Input({ label, name, value, onChange }) {
    return (
        <div className='Input'>
            <label className='input-label' htmlFor={name}>
                {label}
                <input
                    id={name}
                    className='input-input'
                    type='text'
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                />
            </label>
        </div>
    )
}

export default Input