import './Input.css'

function Input({value, onInput}) {
    return (
        <div className='Input'>
            <label className='input-label' htmlFor='input-input'>
                <input id='input-input' type='text' value={value}
                    onInput={(e) => onInput(e.target.value)}/>
            </label>
        </div>
    )
}

export default Input