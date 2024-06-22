import React from 'react'
import '../Style/Projects.css'

export const Projects = () => {
  const projects = [
    {
      title: "Project title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: "http://localhost:3000"
    },
    {
      title: "Project title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: "http://localhost:3000"
    },
    {
      title: "Project title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: "http://localhost:3000"
    },
    {
      title: "Project title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: "http://localhost:3000"
    },
    {
      title: "Project title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: "http://localhost:3000"
    },
    {
      title: "Project title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      url: "http://localhost:3000"
    },
  ]
  return (
    <div id="projects" className="project">
      <h1>Projects</h1>
      <div className="carousel">
        {
          projects.length === 0 ? <h2>No content to display</h2> :
          projects.map((project) => (
            <div className="cointainer">
              <iframe className='website' src={project.url} scrolling='no'></iframe>
              <a href={project.url} target='_blank' className='title'>{project.title}</a>
              <p className='description'>{project.desc}</p>
            </div>
          ))
        }
        {/* <div className="cointainer">
          <iframe className='website' src='http://localhost:3000' scrolling='no'></iframe>
          <h3 className='title'>Title</h3>
          <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div> */}
        {/* <a href="" className="prev">&#10094;</a>
        <a href="" className="next">&#10095;</a> */}
      </div>
    </div>
  )
}
