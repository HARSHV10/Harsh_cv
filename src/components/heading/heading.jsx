import React from 'react';
import './heading.css'

export default function Heading(){
    return (
        <div className='parent-heading'>
        <div className='heading'>
        <div className='about-me'>
        <h1 className='heading-text'>Hi <div>Iam Harsh</div> </h1>
        <h2 className='subcontent'>A computer science undergrad with a strong passion for web development. I am driven by the transformative power of websites and how they connect people and ideas across the globe.</h2>
        </div>
        <div className='img'><img src={"https://bestanimations.com/media/cubes/1341687619cube-3d-computer-art-geometry-gif-1).gif"}></img></div>
        </div>
        <div className='scrollDown' >
        <div>
        <img src={'https://cdn-icons-png.flaticon.com/128/9589/9589635.png'}></img>
        </div>
        </div>
        </div>
    )
}