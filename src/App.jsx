import { useState } from 'react'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'




function App() {
 return( 
  <div className='container'>
    <Hero />
    <Who />
    <Works />
    <Contact />
  </div>
  )
}

export default App


// npm install three @react-three/fiber @react-three/drei 