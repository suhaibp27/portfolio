import React from 'react'
import './Skills.css'
import ReactLogo from '../media/react.png';
import JavaScriptLogo from '../media/js.png';
import CssLogo from '../media/css-3.png';
import HtmlLogo from '../media/html-5.png';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <h3 className='skills__title'>Skills</h3>
        <div className="skills__icons">
            <div className="skills__icon__container">
                <img src={ReactLogo} className="skills__icon react__logo" alt="React.js" />
                <div className='skills__icon__title'>React Js</div>
            </div>
            <div className="skills__icon__container">
                <img src={CssLogo} className="skills__icon" alt="CSS 3" />
                <div className='skills__icon__title'>CSS 3</div>
            </div>
            <div className="skills__icon__container">
                <img src={HtmlLogo} className="skills__icon" alt="HTML 5" />
                <div className='skills__icon__title'>HTML 5</div>
            </div>
            <div className="skills__icon__container">
                <img src={JavaScriptLogo} className="skills__icon" alt="JS" />
                <div className='skills__icon__title'>JavaScript</div>
            </div>
            {/* <img src={ReactLogo} className="skills__icon" alt="React.js" />
            <img src={JavaScriptLogo} className="skills__icon" alt="JS" />
            <img src={CssLogo} className="skills__icon" alt="CSS 3" />
            <img src={HtmlLogo} className="skills__icon" alt="HTML 5" /> */}
        </div>
    </div>
  )
}

export default Skills