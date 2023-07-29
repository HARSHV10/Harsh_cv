import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Intro from './component/intro';
import Education from './component/education';
import workExp from './component/workExp';
import Skills from './component/skills';
import Projects from './component/projects';
import Contact from './component/contact';
import Navbar from './component/navbar';
import './pagedesign.css'


function App() {

  // <workExp/>
  // <Navbar/>
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <div className='cover'>
    <Education/>
    </div>
    <Projects/>
    <div className="cover">
    <Skills/>
    </div>
    <Contact/>
    </div>
  )
}

export default App
