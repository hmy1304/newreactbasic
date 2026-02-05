import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const colors = ["red", "blue", "green"]
    const [index, setIndex]=useState(0)

    const changeColor = () => {
        // index < 2 ? setIndex(index+1) : setIndex(0)

        // let next = index+1
        // if(next===colors.length){
        //     next = 0
        // }
        // setIndex(next)

        setIndex((prev)=> (prev+1)%colors.length)
    }

  return (
    <div>
        <Child color={colors[index]}/>
        <button onClick={changeColor}>색상변경</button>
    </div>
  )
}

export default Parent