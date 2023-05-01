import React from 'react';
import './landing.css'
import logo from "../media/media2.gif"
import ContactMe from './contactme';

export default function Landing(){
    return(
        <div>
        <div className='landing'>
        <div className='landing_one'>
        <div className='heading_text'>Hello</div>
        <div className='blodertext'><span className='texthighlight'>Harsh</span> this Side  <br></br>
        I am a student from Delhi, India looking forward to work in with new people and learn new Stuffs
        </div>
        </div>
        <div className='landing_two'>
        <img className='me_img' src={logo}></img>
        
        </div>
        </div>
        </div>
    );
}