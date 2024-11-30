import './App.css'
import Home from './components/Home'
import Skills from './components/Skiils'
import Navbar from './components/Navbar'
function App() {
  return (
      <>
      <div className='container'>
        <Navbar/>
        <Home/>
        <Skills/>
      </div>
      </>

  )
}

export default App