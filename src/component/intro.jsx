import React from 'react';
import "./intro.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import { GitHub, LinkRounded, LinkedIn, Mail, Twitter } from '@mui/icons-material';
export default function Intro(){
    return(
        <div className='introMain'>
        
<div className='introImg'>

<img src="">
</img>
   </div>
        <div className='introClass'>
        <div className='introText'>
        <h1 className='textHead'>Hello!</h1>I'm <span className='MyName'>
        Harsh</span> <span className='txting'>, a sophomore with a strong passion for web development. I am driven by the transformative power of websites and how they connect people and ideas across the globe.</span>
        <div className='social'>
        <a href="https://www.linkedin.com/in/harsh-vishwakarma-591049229/">
        <div><LinkedIn sx={{ fontSize: '60px' }} />
        </div>
        </a>
        <div>
        <a href='https://twitter.com/HarshV_25'>
        <Twitter sx={{ fontSize: '60px' }}/>
        </a>
        </div>
        <div>
        <a href='https://github.com/HARSHV10'>
        <GitHub sx={{ fontSize: '60px' }}/>
        </a>
        </div>
        <div>
        <a href = "mailto: amv.harsh@gmail.com">
        <Mail sx={{ fontSize: '60px' }}/>
        </a>
        </div>
        </div>
        </div>
    
        </div>
       
        <div className='scroll-down'>
        scroll down
        </div>

   
   </div>
   
    );
} 