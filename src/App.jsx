import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Courses from './Components/Courses'
import './App.css'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Testemonials from './Components/Testemonials'
import Form from './Components/Form'
import Footer from './Components/Footer'
import Videoplayer from './Components/Videoplayer'


function App() {
 const [playState, setPlayState] = useState(false);
 

  return (
    
    <div>
      <Header />
      <Hero />
      <Courses />
      <About  setPlayState={setPlayState}/>
      <Gallery />
      <Testemonials />
      <Form />
      <Footer />
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
    
  )
}

export default App
