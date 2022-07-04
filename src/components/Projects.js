import React from 'react'
import Project from './Project'
import './Projects.css'
import todoApp from '../media/todoApp.png'
import { projectObj } from './ProjectData'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h3 className='projects__title'>Projects</h3>
        {/* <Project image={todoApp} /> */}
        {projectObj.map(project => {
          return <Project key={project.id} project={project} />
        })}
    </div>
  )
}

export default Projects