//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import { AboutSection } from './components/AboutSection'
import { HomeSection } from './components/HomeSection'
import { RecentWork } from './components/RecentWork'
import { AboutMe } from './components/AboutMe'
import { Header } from './components/Header'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
        <Header />
      <HomeSection /> 
      
      <AboutSection />
      <AboutMe />
      <RecentWork />
      <Contact />
      <Footer />
    </>
  )
        
  
}


export default App
