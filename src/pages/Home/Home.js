import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-content'>
      <div>
        <h1 className='name'><span>R</span>AKURAMAN</h1>
        <p className='home-summary'>Digital Design Engineer passionate about building elegant hardware/software solutions while maintaining a balanced, intentional, and peaceful life.</p>
        <div className='home-links'>
          <button className='home-buttons'>Download Resume</button>  
          <img className='home-skills' src={require('./skills.png')} alt="skills" />
        </div>
      </div>
      <div className='home-profile'>
        <img src={require('./raku pro pic 2.png')} alt="profile" />
      </div>
    </div>
  )
}

export default Home