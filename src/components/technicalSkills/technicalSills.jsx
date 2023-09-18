import React from 'react'
import './technicalSkills.css'
import Card_tech from './card/card-skill'
import java from '../../assets/java.png'
import python from '../../assets/python.png'
import js from '../../assets/js.png'
import nodejs from '../../assets/node.png'
import react from '../../assets/react.png'
import c from '../../assets/c.png'

const data =[
    {title:"Python",desc:"Unleash your coding superpowers with elegance and simplicity" ,lev:"80%",icon:python},
    {title:"JavaScript",desc:"Empowering the web with interactivity and endless possibilities" ,lev:"90%",icon:js},
    {title:"C/C++",desc:"The building blocks of modern software, empowering developers to craft efficient, robust, and limitless solutions." ,lev:"90%",icon:c},
    {title:"React",desc:"Transforming web development with modular brilliance." ,lev:"90%",icon:react},
    {title:"NodeJs",desc:"Revolutionizing web development with simplicity and scalability" ,lev:"80%",icon:nodejs},
    {title:"Java",desc:"secret wepon in arsenal" ,lev:"60%",icon:java},
    {title:"MySql",desc:"saap paal rakhe hai saanp" ,lev:"60%",icon:"https://cdn-icons-png.flaticon.com/128/5968/5968363.png"}
    
]

export default function TechincalSkills(){
    return (
        <div>
        <h1 className='project-heading'>|Project</h1>
        <hr></hr>
        <div className='technical-skills'>
        <div className='card-tech-area'>
        {data? data.map((i)=>{
            return(
                <Card_tech info={i}/>
                )
            }):"Loading"}
            </div>
            </div>
        
        </div>
    )
}