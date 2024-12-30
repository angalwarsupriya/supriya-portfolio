import './index.css'



const status = {
    home:'HOME',
    skills:"SKILLS",
    projects:'PROJECTS',
    contact:'CONTACT'
}



/* start functional component  from heare */


function MobileNav(props) { 
  
  /* we got menu status as props from Navbar */
    const { menuStatus } = props
    
    const menuStaAct = menuStatus ? '' : 'active'
  
  return (
    <div className={`mobile-nav-con ${menuStaAct}`}>
        <nav className='nav-bar-in-sm'>
            <a href='#hero-section' className='menu-item-sm menu-item' >Home</a>
            <a href='#skills-section' className='menu-item-sm menu-item' >Skills</a>
            <a href='#my-projects' className='menu-item-sm menu-item' >Projects</a>
            <a href='#contact-section' className='menu-item-sm menu-item' >Contact Me</a>
        </nav>
    </div>
  )
}

export default MobileNav