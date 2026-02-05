import React, {useState} from 'react'

const Counters = () => {
    const [count, setCount]=useState(0)


    const up=()=>{
        setCount(count+1)
    }
    const down=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }

    return (
        <div>
            <p>
                {count}
            </p>
            <button onClick={down}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={up}>+</button>
        </div>
    )
}

export default Counters