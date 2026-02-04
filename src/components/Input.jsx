import React from 'react'

const Input = ({inputValue, title, placeholder, onChange}) => {

    const onClickButton=()=>{
        console.log(`입력받은 값은${inputValue}`)
    }

  return (
    <div>
        <h2>{title}</h2>
        <input 
        type="text" 
        placeholder={placeholder}
        value={inputValue}
        />
        <button onClick={onClickButton}>click</button>
    </div>
  )
}

export default Input