import React ,{useContext} from 'react'
import { MyContext } from '../context/MyContext'

const MyComponent = () => {
    const {value,setValue}=useContext(MyContext)
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>setValue('Update!!!!')}>Update Value</button>
    </div>
  )
}

export default MyComponent