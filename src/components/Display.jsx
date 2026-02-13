import React, {useContext, useState} from 'react'
import { CounterContenxt } from '../context/CounterContext'

const Display = () => {
  const {count} =useContext(CounterContenxt)
  return (
    <div>
      현재의 카운트 : {count}
    </div>
  )
}

export default Display