import './App.css'
import Header from './componets/Header'
import Aside from './componets/Aside'
import Main from './componets/Main'
import Footer from './componets/Footer'

function App() {

  return (
    <div id='container'>
      <Header />
      <div className="inner">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
