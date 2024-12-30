import './index.css'
import MobileNav from '../MobileNav'

import { LuMenu } from "react-icons/lu";
import { MdOutlineHighlightOff } from "react-icons/md";
import { useState } from 'react'



function Navbar() {
    const [menuStatus, changeMenuStatus] = useState(false)

    const changeMenuStatusFun  =()=>{
        changeMenuStatus((preve)=> !preve)
    }
      
    return (
    <div className='nav-wrapper'>
       <div className='nav-container'>
           <h4 className='logo glow'>Portfolio</h4>
           <nav className='ul-con'>
                <a href='#hero-section' className='menu-item' >Home</a>
                <a href='#skills-section' className='menu-item' onClick={() => changeActiveLinkStatus(status.skills)}>Skills</a>
                <a href='#my-projects' className='menu-item'  onClick={() => changeActiveLinkStatus(status.projects)}>Projects</a>
                <a href='#contact-section' className='menu-item'  onClick={() => changeActiveLinkStatus(status.contact)}>Contact Me</a>  
            </nav>
            
            <button className='glow-on-hover'>Hire Me</button>
             
            {menuStatus ?  <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
               <MdOutlineHighlightOff style={{fontSize:'20px'}}/>
            </button> :
            <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                <LuMenu style={{fontSize:'20px'}}/>
            </button>} 

            <MobileNav menuStatus={menuStatus}/>
            
       </div>
    </div>
  )
}

export default Navbar
