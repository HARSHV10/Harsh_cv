import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import "./skl.css";

export default function Skl(props){
    
    return(<div className="box">
        <div className='skltest'>
        <div className='sklTitle'>
        {props.title}
        </div>
        <div className='quote'>
        {props.quote}
        </div>
        <LinearProgress variant="determinate" value={props.value} sx={{height:"1vw",borderRadius:"5px",width:'20vw'}}/>
        </div>
    </div>);
}