import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './components/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'

const App = () => {
  return (
    <div className=" max-w-7xl mx-auto ">
     <Navbar />   
     <Hero/> 
     <About/> 
     <Projects/>

     <Contact />
    </div>
  )
}

export default App
