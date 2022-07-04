import React from 'react'
import './About.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about__child">
            <p className="about__title">About me</p>
            <p className='about__description'>Hello World! I'm Suhaib Peechanary, a Front-end Web Developer based out of India. I'm passionate about creating interactive applications and experiences on the web.</p>
            <p className='about__description'>I spend my free time on personal projects and learning more about HTML, CSS, JavaScript and React.js. I aspire to be a Full-Stack Web Developer.</p>
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/suhaib-p-055010176/" target="_blank" className='link'>
            <BsLinkedin className="link"/>
          </a>
          <a href="https://github.com/suhaibp27" target="_blank" className='link'>
            <BsGithub className="link"/>
          </a>
          <a href="mailto:suhaibp27@gmail.com" className='link'>
            <SiGmail className="link"/>
          </a>
        </div>
    </div>
  )
}

export default About