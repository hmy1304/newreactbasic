import React from 'react'

const MenuButton = ({id, label, color}) => {
    const onClick = () => {
        console.log(label)
    }

    return (
        <div>
            <button 
            onClick={onClick}
            style={{color:color}}
            >
                {label}
            </button>
        </div>
    )
}

export default MenuButton