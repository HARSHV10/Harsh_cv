import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import "./skills.css";
import Skl from './skl_Compnt/skl';

export default function Skills(){
    // <LinearProgress variant="determinate" value={70} sx={{width:"100vw"}} />
    const data =[
        {
        title:"C/C++",
        quote:"The building blocks of modern software, empowering developers to craft efficient, robust, and limitless solutions.",
        value:90
    },
        {
        title:"Js",
        quote:" Empowering the web with interactivity and endless possibilities",
        value:90
    },
        {
        title:"Python",
        quote:"Unleash your coding superpowers with elegance and simplicity.",
        value:70
    },
        {
        title:"Solidity",
        quote:"Empowering decentralized revolution with smart contracts and blockchain innovation.",
        value:50
    },

]
const framework=[ 
    {
    title:"React",
    quote:"Transforming web development with modular brilliance.",
    value:100
},
    {
    title:"Node/Express",
    quote:"Revolutionizing web development with simplicity and scalability",
    value:80
},

]
const inductrialKnowledge=[
    {
        title:"Frontend Web Development",
        quote:"",
        value:100
    },
    {
        title:"Backend Development",
        quote:"",
        value:75
    },
    {
        title:"Data Structures & Algorthm",
        quote:"",
        value:70
    },

]
    return(
        <div className='ok' id='skill'>
        <h1 className='headingText'>Skills</h1>
        <div className='Skills'>
        <div className='Skill-given'>
        </div>
        <div className='main-box'>
        <h1 className='Subheading'>Language</h1>
        {
            data.map((i)=>{
                return(
                    <Skl title={i.title} value={i.value} quote={i.quote} key= {i.title}/> 
                    );
                })
            }
            </div>
        <div className='main-box'>
        <h1 className='Subheading'>Framework</h1>
        {
            framework.map((i)=>{
                return(
                    <Skl title={i.title} value={i.value} quote={i.quote} key= {i.title}/> 
                    );
                })
            }
            <div>
            <h1 className='Subheading'>Industrial Knowledge</h1>
            {inductrialKnowledge.map((i)=>{
                return(
                    <Skl title={i.title} value={i.value} quote={i.quote} key= {i.title}/> 
                    );
                })
            }


            </div>
        </div>
        
        </div>
        </div>
    );
}