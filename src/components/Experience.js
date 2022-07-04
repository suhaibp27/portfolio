import React from 'react'
import './Experience.css'
import {ImLocation} from 'react-icons/im'
import {MdDateRange} from 'react-icons/md'

const Experience = () => {
  return (
    <div className='main' id='experience'>
      <div className="experience">
        <h5  className='experience__title'>Experience</h5>
        <h5 className="experience__heading">Technology Analyst | <span>Infosys Ltd.</span></h5>
        <p className='client'>Client: <span>Caterpillar Inc.</span></p>
        <div className="experience__details">
          <p className="location"><ImLocation style={{marginRight: "5px"}}/>Bangalore, India</p>
          <p className="duration"><MdDateRange style={{marginRight: "5px"}}/>01/19 - 08/22 (3Y 8M)</p>
        </div>
      </div>
      <div className="education">
        <h5  className='experience__title'>Education</h5>
        <h5 className="experience__heading">BTECH | <span>Rajagiri School of Engineering and Technology</span></h5>
        <p className='client'>Specialization: <span>Electrical and Electronics Engineering</span></p>
        <div className="experience__details">
          <p className="location"><ImLocation style={{marginRight: "5px"}}/>Ernakulam, India</p>
          <p className="duration"><MdDateRange style={{marginRight: "5px"}}/>2014 - 2018</p>
        </div>
      </div>
    </div>
  )
}

export default Experience