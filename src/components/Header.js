import React from 'react'
import './Header.css'
// import {HashLink as Link} from 'react-router-hash-link';
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <header className='header'>
        <div className="header__top">
          <p>This portfolio is made using <a href="https://www.reactjs.org" target="_blank">React.js</a></p>
        </div>
        <div className="header__bottom">
          <Link to="app" className="header__logo" smooth={true} duration={500} spy={true} exact='true'>&#60;<span className='header__title'>Suhaib </span>&#47;&#62;</Link>
          <ul className="header__options">
            <li><Link to="about" smooth={true} duration={500} spy={true} exact='true' offset={-85}>About me</Link></li>
            <li><Link to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-85}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-85}>Projects</Link></li>
            <li><Link to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-85}>Edu & Exp</Link></li>
          </ul>
        </div>

    </header>
  )
}

export default Header