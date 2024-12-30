import './index.css'
import { useState } from 'react'

// importing components //
import MobileNav from '../MobileNav'

// importing react-icons //

import { LuMenu } from "react-icons/lu";
import { MdOutlineHighlightOff } from "react-icons/md";



// get started our Functioal components //

function Navbar() {

    // managing menu status using useState Hook //

    const [menuStatus, changeMenuStatus] = useState(false)

    // changing menu status function //

    const changeMenuStatusFun  =()=>{
        changeMenuStatus((preve)=> !preve)
    }
      
    // returning nav bar //
    return (

    <header className='nav-wrapper'>
        <div className='nav-container'>
            <h4 className='logo glow'>Portfolio</h4>
            <nav className='nav-con'>
                <a href='#hero-section' className='menu-item'>Home</a>
                <a href='#skills-section' className='menu-item' onClick={() => changeActiveLinkStatus(status.skills)}>Skills</a>
                <a href='#my-projects' className='menu-item'  onClick={() => changeActiveLinkStatus(status.projects)}>Projects</a>
                <a href='#contact-section' className='menu-item'  onClick={() => changeActiveLinkStatus(status.contact)}>Contact Me</a>  
            </nav>
            
            <button className='glow-on-hover'>Hire Me</button>
             
            {menuStatus ?
                <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                   <MdOutlineHighlightOff style={{fontSize:'20px'}}/>
                </button>
                    :

                <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                   <LuMenu style={{fontSize:'20px'}}/>
                    </button>
            } 
   
            <MobileNav menuStatus={menuStatus}/>         
        </div>         
    </header>
        
  )
}

export default Navbar
