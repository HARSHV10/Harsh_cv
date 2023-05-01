import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './component/landing'
import Project from './component/project'
import ContactMe from './component/contactme'
import logo from './media/giphy.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div className='top'>
    <a style={{fontSize:"1.5rem"}} href="#Projects">Projects</a>
    <a style={{fontSize:"1.5rem"}} href="#ContactMe">Contact Me</a>
    </div>
    <Landing/>
    <Project/>
    <ContactMe/>  

    <span className='easteregg'>{count}</span> 
    <button onClick={()=>{
      setCount(count+1);
    }
    }>Easter egg</button> 
    </div>
  )
}

export default App
