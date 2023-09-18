import React from 'react';
import './card.css'


export default function Card({info}){
    console.log(info)
    return(
        
        <div className='outer-area'>
        <div className='inner-div-project'>
        <img className='project-image' src={info.img}></img>
        </div>
        <div className='card-area'>
        <div className='card-heading'>
        {info.title} 
        </div>
        <div className='card-desc'>
        {info.desc}
        </div>
        <div className='card-tech-content'>
        <span className='teacStackLable'>TechStack</span> {info.tech}
        </div>
        </div>
        </div>
       
    )
}