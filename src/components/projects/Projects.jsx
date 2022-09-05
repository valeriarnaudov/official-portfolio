import React from 'react'
import "./projects.css"

function Projects({img, link}) {
  return (
    <div className='project'>
      <div className="project-browser">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
      </div>
      <a href={link} target="_blank" rel='noreferrer'>
        <img src={img} alt="Project" className="project-image" />
      </a>
    </div>
  )
}

export default Projects