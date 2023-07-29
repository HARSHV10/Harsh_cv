import React from 'react';
import "./contactme.css"
import { GitHub, LinkRounded, LinkedIn, Mail, Twitter } from '@mui/icons-material';

export default function Contact(){
    return(
        <div id="contact">
        <span className='contact'>
        Get to me 
        </span>
        <div className='contactMe'>
        <div>
        <a href="https://github.com/HARSHV10">
        <LinkedIn sx={{ fontSize: '60px' }}/>
        </a>
        </div>
     
        <div>
        <a href="https://github.com/HARSHV10">
        <GitHub sx={{ fontSize: '60px' }}/>
        </a>
        </div>
     
        <div>
        <a href='https://github.com/HARSHV10'>
        <Twitter sx={{ fontSize: '60px' }}/>
        </a>
        </div>
        <div>
        <a href = "mailto: amv.harsh@gmail.com">
        <Mail sx={{ fontSize: '60px' }}/>
        </a>
        </div>
        </div>
        
        </div>
    );
}