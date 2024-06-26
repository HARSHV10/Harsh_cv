import { useState } from 'react'
import github from './assets/github.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/heading/heading'
import Project from './components/Project/project'
import TechincalSkills from './components/technicalSkills/technicalSills'
import ContactMe from './components/ContactMe/ContactMe'
import samplePDF from '../resume.pdf'
//import Test from './test'
// import { DotBackgroundDemo } from './DotBackGroundDemo'
import { GridBackgroundDemo } from './DotBackGroundDemo'
import { VortexDemoSecond } from './vertexDemo';
// import { TextGenerateEffectDemo } from '../typewritterdemo'
import { TextGenerateEffect } from './ui/typewritterEffect'

// document.documentElement.classList.add('dark')
function App() {
  
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
    
  // <Heading/>
  //  <GridBackgroundDemo/>
  return (
    <div>
    <VortexDemoSecond/>
    

    <a href={samplePDF} target="_blank">
    <div className="resume" >
    <img className="img_resume" src={"https://cdn-icons-png.flaticon.com/128/3135/3135692.png"}></img> 
    </div>
    </a>
    <Project/>
    <TechincalSkills/>
    <ContactMe/> 
    </div>  
  

  )
}

export default App
