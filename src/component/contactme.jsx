import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import './contactme.css'


export default function ContactMe(){
    return(
        <div id="ContactMe">
        <div className='Heading_Contact'>Get to me</div>
        <div className='SubHeading_Contact'>I will be happy to talk to you about my expriences and more get in touch with me on LinkedIn or drop a mail:</div>
        <div className='SubHeading_Contact'>amv.harsh@gmail.com</div>
       <div className='contactlogo'>
       <a href='https://github.com/HARSHV10'>
       <GitHubIcon sx={{ fontSize: 70,margin:10}}/>
       </a>
       <a href='https://www.linkedin.com/in/harsh-vishwakarma-591049229'>
       <LinkedInIcon sx={{ fontSize: 70,margin:10}}/>
       </a>
       <a href='https://twitter.com/HarshV_25'>
       <TwitterIcon sx={{ fontSize: 70,margin:10}}/>
       </a>
       <a>
       <EmailIcon sx={{ fontSize: 70,margin:10}}/>
       </a>
       </div>
        </div>
    );
}
