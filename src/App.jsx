import { useState } from 'react'
import github from './assets/github.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/heading/heading'
import Project from './components/Project/project'
import TechincalSkills from './components/technicalSkills/technicalSills'
import ContactMe from './components/ContactMe/ContactMe'

function App() {

  return (
    <div>
    <div className="resume">
    <a href="https://drive.google.com/file/d/1TPU-l1w3dtwLK6ENB9K3Mlw5mWpgBZEA/view?usp=sharing">
    <img className="img_resume" src={"https://cdn-icons-png.flaticon.com/128/3135/3135692.png"}></img> 
    </a>
    </div>
    <Heading/>
    <Project/>
    <TechincalSkills/>
    <ContactMe/>
    </div>
  )
}

export default App
