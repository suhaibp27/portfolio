import React from 'react'
import './Home.css'
import { FaReact } from "react-icons/fa";
import {Link} from 'react-scroll'
import Resume from '../media/Suhaib Peechanary.pdf'

const Home = () => {
  return (
    <main className='home'>
        <h1 className='home__title'>Suhaib Peechanary</h1>
        <p className='home__description'>A Front-end Web Developer | React Js</p>
        <div className="home__buttons">
            <a href={Resume} download={Resume} className='home__button1'>Download Resume</a>
            <Link to="projects" className='home__button2' smooth={true} duration={500} spy={true} exact='true' offset={-85}>Projects &#62;</Link>
        </div>
        <FaReact className='icon'/>
    </main>
  )
}

export default Home