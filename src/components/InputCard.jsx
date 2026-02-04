import React from 'react'

const InputCard = ({title, placeholder}) => {
    const onChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <h2>{title}</h2>
            <input 
            onChange={onChange}
            type="text" 
            placeholder={placeholder}
            />
            
        </div>
    )
}

export default InputCard