import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Projects/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
