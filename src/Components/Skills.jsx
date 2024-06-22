import React from 'react'
import '../Style/Skills.css'

export const Skills = () => {
  const skills = [
    {
      category: "Web Development",
      relatedSkills:["HTML","CSS","Javascript","React js","Django","Node js"]
    },
    {
      category: "ServiceNow",
      relatedSkills:["ITSM","Virtual Agent","Discovery","Service Portal"]
    },
    {
      category: "Game Development",
      relatedSkills:["Unity", "C#"]
    },
    {
      category: "Genric",
      relatedSkills:["Python","SQL","MongoDB","C++","Java","React Native"]
    },
  ]
  return (
    <div id='skills' className="skills">
      <h1>Skills & Technologies</h1>
      {
        skills.length === 0 ? <h2>Unable to fetch the content. PLease try again later.</h2>:
        skills.map((skill)=>(
          <div className="category">
            <h2>{skill.category}</h2>
            <div className="skill">
              {
                skill.relatedSkills.map((val)=>(
                  <h4>{val}</h4>
                ))
              }
            </div>
          </div>
        ))
      }
      {/* <div className="category">
        <h2>Web Development</h2>
        <div className="skill">
          <h4>JavaScript</h4>
          <h4>HTML</h4>
          <h4>CSS</h4>
          <h4>React Js</h4>
        </div>
      </div> */}
    </div>
  )
}
