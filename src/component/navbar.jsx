import React from 'react';
import './nav.css';
export default function Navbar(){
    return(
        <div className='navbar'>
        <a href='#edu'>
        <div className='borderbg'>
        Education
        </div>
        </a>
        <a href="#project">
        <div className='borderbg' >
        Projects
        </div>
        </a>
        <a href="#skill">
        <div className='borderbg' >
        Skills
        </div>
        </a>
        <a href="#contact">
        <div className='borderbg' >
        Contact Me
        </div>
        </a>
        </div>
    );
}