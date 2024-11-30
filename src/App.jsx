import './App.css'
import Home from './components/Home'
import Skills from './components/Skiils'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  return (
      <>
      <div className='container'>
        <Navbar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
      </>

  )
}

export default App