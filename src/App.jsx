import './App.css'
import Header from './components/Header'
import Aside from './components/Aside'
import Nav from './components/nav'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <div class="container">
      <Header/>
      <Nav/>
      <div class="inner">
        <Aside/>
        <div class="inner2">
          <Card/>
          <Card/>
          <Card/>
        </div>
        
      </div>
      <Footer/>

    </div>
  )
}

export default App
