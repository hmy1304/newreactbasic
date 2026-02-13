import React, {useState} from 'react'
import { CounterContenxt } from './CounterContext'

export const CounterProvider = ({children}) => {
  const [count, setCount] =useState(0)

  return (
    <CounterContenxt.Provider value={{count, setCount}}>
        {children}
    </CounterContenxt.Provider>
  )
}

