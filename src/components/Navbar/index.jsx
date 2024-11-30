import './index.css'
import { LuMenu } from "react-icons/lu";
import { MdOutlineHighlightOff } from "react-icons/md";
import { useState } from 'react'


const status = {
    home:'HOME',
    skills:"SKILLS",
    projects:'PROJECTS',
    contact:'CONTACT'
}

function Navbar() {
    const [menuStatus, changeMenuStatus] = useState(false)

    const [activeLinkStatus, changeActiveLink]= useState('HOME')

    const changeMenuStatusFun  =()=>{
        changeMenuStatus((preve)=> !preve)
    }
    
    const changeActiveLinkStatus = (status)=>{
       changeActiveLink(status)
    }

    return (
    <div className='nav-wrapper'>
       <div className='nav-container'>
           <h4 className='logo glow'>Portfolio</h4>
            <ul className='ul-con'>
                <li className='li'>
                    <a href='#hero-section' className='menu-item' style={{color: activeLinkStatus===status.home ? 'skyblue' : 'white', fontSize:activeLinkStatus===status.home ? '1.2rem' : '1.05rem'}} onClick={() => changeActiveLinkStatus(status.home)}>Home</a>
                </li>
                <li className='li'>
                    <a href='#skills-section' className='menu-item' style={{color: activeLinkStatus===status.skills ? 'skyblue' : 'white', fontSize:activeLinkStatus===status.skills ? '1.2rem' : '1.05rem'}} onClick={() => changeActiveLinkStatus(status.skills)}>Skills</a>
                </li>
                <li className='li'>
                    <a href='#my-projects' className='menu-item' style={{color: activeLinkStatus===status.projects ? 'skyblue' : 'white', fontSize:activeLinkStatus===status.projects ? '1.2rem' : '1.05rem'}} onClick={() => changeActiveLinkStatus(status.projects)}>Projects</a>
                </li>
                <li className='li'>
                    <a href='#contact-section' className='menu-item' style={{color: activeLinkStatus===status.contact ? 'skyblue' : 'white', fontSize:activeLinkStatus===status.contact ? '1.2rem' : '1.05rem'}} onClick={() => changeActiveLinkStatus(status.contact)}>Contact Me</a>
                </li>
            </ul>
            
            <button className='glow-on-hover'>Hire Me</button>
             
            {menuStatus ?  <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
               <MdOutlineHighlightOff style={{fontSize:'20px'}}/>
            </button> :
            <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                <LuMenu style={{fontSize:'20px'}}/>
            </button>}       

       </div>
    </div>
  )
}

export default Navbar
