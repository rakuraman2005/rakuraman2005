import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import  './Home.css'

function handleClick()
{
    const link =document.createElement("a");
    link.href='./Rakuramans.pdf';
    link.setAttribute("download","Rakuramans.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const Home = () => {
  
  return (
    <>
    <div>
       <div className='home-content'>
        <div>
       <h1 className='name'><span>R</span>AKURAMAN</h1>
       <p className='home-summary'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   I am a passionate and versatile developer with expertise in MERN stack development, creating robust and responsive full-stack web applications. Alongside software development, I also have a strong foundation in digital and chip design, showcasing my ability to bridge the gap between hardware and software systems. With a keen interest in the Internet of Things (IoT), I enjoy building innovative solutions that integrate real-world hardware with modern technologies.</p>
       <div className='home-links'>
           <button className='home-buttons' onClick={handleClick}>Download Resume</button>  
          <center> <img className='home-skills' src={require('./skills.png')} width ='400px' height='160px'></img></center>
       </div>
       </div>
       <div className='home-profile'><img src= {require('./raku pro pic 2.png')} width = '100%'  ></img></div>
       </div>
    </div>
    </>
  )
}

export default Home