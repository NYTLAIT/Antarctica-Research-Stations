import './Input.css'

function Input({label, name, value, onInput}) {
    return (
        <div className='Input'>
            <label className='input-label' htmlFor={name}>
                {label}
                <input 
                    id={name}
                    className='input-input'
                    type='text' 
                    value={value}
                    onInput={(e) => onInput(name, e.target.value)}
                />
            </label>
        </div>
    )
}

export default Input