import React from 'react'
import './Project.css'

const Project = ({project}) => {
  return (
    <div className='project'>
        <div className="project__details">
            <h3 className="project__title">{project.title}</h3>
            <p className="project__description">{project.description}</p>
            <div className='project__buttons'>
                <a className='project__button' href={project.link} target='_blank'>Open</a>
                <a className='project__button' href={project.code}>Code</a>
            </div>
        </div>
        <a className='project__link' href={project.link} target='_blank'><img src={project.image} alt="" className="project__image" /></a>
    </div>
  )
}

export default Project