import React from 'react';
import './ContactMe.css';
import github from './github.gif'


export default function ContactMe(){
    return (
        <div>
        <h1 className='project-heading'>|Contact Me</h1>
        <div className='contactMe'>
        <div className='one'>
        <a target='_blank' href='https://twitter.com/HarshV_25'>
        <img className="image-icon"  src='https://cdn-icons-png.flaticon.com/128/733/733579.png'></img>
        </a>
        </div>  
        <div className='one'>
        <a target='_blank' href='https://github.com/HARSHV10'>
        <img className="image-icon" src='https://cdn-icons-png.flaticon.com/128/270/270798.png'></img>
        </a>
        </div>  
        <div className='one'>
        <a target='_blank' href='https://www.linkedin.com/in/harsh-vishwakarma-591049229/'>
        <img className="image-icon" src='https://cdn-icons-png.flaticon.com/128/145/145807.png'></img>
        </a>
        </div>  
        <div className='one'>
        <a target='_blank' href="https://mail.google.com/" mailto="amv.harsh@gmail.com">
        <img className="image-icon" src='https://cdn-icons-png.flaticon.com/128/5968/5968534.png'></img>
        </a>
        </div>  
        </div>
        </div>
    )
}