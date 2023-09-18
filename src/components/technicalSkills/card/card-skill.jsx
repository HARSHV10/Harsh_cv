import React, { useEffect, useState } from 'react';
import './card-skills.css'
import logo from '../../../assets/java.png'
export default function Card_tech({info}){
    const[level,setlevel]=useState();
    useEffect(() => {
        
        return () => {
            setlevel(info.lev)
      }
    }, [])
    
    
    return(
        <div className='outer_card'>
        <div className='inner-div' >
        <img className='skills_img' src={info.icon}></img>
        </div>
        <div className='card_tech'>
        <div className='card-title'>{info.title}</div>
        <div className='about-skill'> {info.desc}</div>
        <div className='skill-lv-outer'>
        <div className='skill-lv' style={{width:level}}></div>
        </div>
        </div>  
        </div>
    )
}
