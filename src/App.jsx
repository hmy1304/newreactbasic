import './App.css'
import Header from './components/Header'
import Aside from './components/Aside'
import Nav from './components/nav'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {

  return (
    <div class="container">
      <Header/>
      <Nav/>
      <div class="inner">
        <Aside/>
        <Content/>
      </div>
      <Footer/>

    </div>
  )
}

export default App
