import React from 'react'
import Counters from './components/counters'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'

const App = () => {
  const user={
    name:'Alice',
    age:21
  }

  return (
    <div>
      <Exam2 />
      <hr />
      <Exam1 {...user}/>
      <Exam3 />
      <Counters />
    </div>
  )
}

export default App
