import React, { useState } from 'react'
import '../Style/Navbar.css'

export const Navbar = () => {
  const[newNav,setNewNav] = useState(false);
  const changeNavbar = () =>{
    if(window.scrollY > 450){
      setNewNav(true);
    }else{
      setNewNav(false);
    }
    // handleMenuClick();
  }
  function handleMenuClick(val){
    if(document.getElementsByClassName("active").length != 0){
      document.getElementsByClassName("active")[0].classList.remove("active");
    }
    val.classList.add("active")
    // if(window.scrollY >= 830 && window.scrollY < 1426){
    //   document.getElementById("menu1").classList.add("active");
    // }else if(window.scrollY >= 1426 && window.scrollY < 2115){
    //   document.getElementById("menu2").classList.add("active");
    // }else if(window.scrollY >= 2115 && window.scrollY < 3091){
    //   document.getElementById("menu3").classList.add("active");
    // }else if(window.scrollY >= 3091){
    //   document.getElementById("menu4").classList.add("active");
    // }
  }
  window.addEventListener("scroll", changeNavbar);


  return (
    <div className={newNav ? "navbar newNav" : "navbar"}>
      <div className="name">{newNav ? <a onClick={(e) => handleMenuClick(e.target)} href='#profile'><span>V</span>iraj <span>D</span>harmameher</a> : null}</div>
      <div className='menuList'>
        <a id="menu1" href="#about" className='menu active' onClick={(e) => handleMenuClick(e.target)}>About</a>
        <a id="menu2" href="#projects" className='menu' onClick={(e) => handleMenuClick(e.target)}>Project</a>
        <a id="menu3" href='#skills' className='menu' onClick={(e) => handleMenuClick(e.target)}>Skills</a>
        <a id="menu4" href='#contact' className='menu' onClick={(e) => handleMenuClick(e.target)}>Contact</a>
      </div>
    </div>
  )
}
