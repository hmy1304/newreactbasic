import React, {useContext} from 'react'
import { CounterContenxt } from '../context/CounterContext'

const Button = () => {
  const {setCount}=useContext(CounterContenxt)

  return (
    <div>
      <button onClick={()=>setCount(prev => prev - 1)}>-</button>
      <button onClick={()=>setCount(0)}>reset</button>
      <button onClick={()=>setCount(prev => prev + 1)}>+</button>
    </div>
  )
}

export default Button