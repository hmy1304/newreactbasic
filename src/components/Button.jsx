import React from 'react'

const Button = ({text, color="gray", children=null}) => {
    const onClickButton =(e)=> {
        // console.log(text, color)
        // console.log(e)
    }
    return (
        <div
        style={{color:color}}
        onClick={onClickButton}
        >
            {text}-{color.toUpperCase()}
            <div>
                {children}
            </div>
        </div>
    )
}

export default Button