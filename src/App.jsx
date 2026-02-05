import React, {useState} from 'react'
import Counters from './components/counters'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'
import Inputfocus from './components/Inputfocus'
import Counter2 from './components/Counter2'
import Lifecycle from './components/Lifecycle'

const App = () => {
  const [state, setState] = useState(true)
  const user={
    name:'Alice',
    age:21
  }

  return (
    <div>
      <button onClick={()=>setState(true)}>마운트</button>
      <button onClick={()=>setState(false)}>언마운트</button>
      {state && 
        <Lifecycle />
      }
      <hr />
      <Counter2 />
      <Inputfocus />
      <Exam3 />
      <Exam2 />
      <Exam1 {...user}/>
      <Counters />
    </div>
  )
}

export default App
