import React from 'react';
import './project.css'
import Card from './card/card';
const data =[{title:'ReadMe',desc:"a social media platform that allows you to exrpress your self",tech:"React,Node,Exrpress,MongoDB",img:"https://cdn-icons-png.flaticon.com/128/5299/5299581.png"},
{title:'Text Summarizer ',desc:"used LSTM and Encoder Decoder Sequence to develop a text summrizer",tech:"Python ,Tensorflow,DeepLearning",img:"https://cdn-icons-png.flaticon.com/128/6461/6461771.png"},
{title:'text Editor',desc:"developed a textEditor which allowes realtime editing using websocket",tech:"React,Exrpress,webSocket,ScoketIO",img:"https://cdn-icons-png.flaticon.com/128/1548/1548205.png"},
{title:'Video Call',desc:"Developed a Video chat app that allows you to talk in real time usin webRTC",tech:"React,Node,Exrpress,webRTC",img:"https://cdn-icons-png.flaticon.com/128/4560/4560293.png"},
{title:'Project Gallery',desc:"showcase for all my project ",tech:"React,Node,Exrpress",img:"https://cdn-icons-png.flaticon.com/128/1329/1329699.png"}
]
export default function Project(){
    return(
        <div>
        <h1 className='project-heading'>|Projects</h1>
        <hr></hr>
        <div className='project-area'>
        <div className='project-list'>
        {data?data.map((i)=>{
            return (<Card info={i}/>)
            
        }):"Loading"
    }
    </div>
    </div>
    </div>
        )
}