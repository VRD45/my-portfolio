import React from 'react'
import '../Style/Contact.css'

export const Contact = () => {
  const handles = [
    {
      title:"LinkedinProfile",
      icon:"fi fi-brands-linkedin",
      url:""
    },
    {
      title:"Github",
      icon:"fi fi-brands-github",
      url:""
    },
    {
      title:"Instagram",
      icon:"fi fi-brands-instagram",
      url:""
    },
    {
      title:"Gmail",
      icon:"fi fi-brands-google",
      url:""
    },
  ]
  return (
    <div id='contact' className="contact">
      <h1>Contact</h1>
      <div className="hire">
        <div className="handles">
          {
            handles.length === 0 ? "No Handles" :
            handles.map((handle) => (
              <a href={handle.url}><i class={handle.icon}></i>  {handle.title}</a>
            ))
          }
        </div>
        <form action="/">
          <h3>Mail me</h3>
          <input type="text" name="" id="" placeholder='Enter your mail here'/>
          <input type="text" placeholder='Enter mail subject'/>
          <textarea name="" id="" placeholder='Enter the content'></textarea>
          <button>Send mail</button>
        </form>
      </div>
      
      
    </div>
  )
}
