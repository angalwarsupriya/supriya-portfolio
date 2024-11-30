import './index.css'

const status = {
    home:'HOME',
    skills:"SKILLS",
    projects:'PROJECTS',
    contact:'CONTACT'
}

function MobileNav(props) { 

  const {menuStatus, changeActiveLinkStatus, activeLinkStatus} = props
  
  const menuStaAct = menuStatus ? '' : 'active'
  
  return (
    <div className={`mobile-nav-con ${menuStaAct}`}>
        <ul className='nav-bar-in-sm'>
            <li className='list-item-sm' >
                <a href='#hero-section' className='menu-item-sm' style={{color: activeLinkStatus===status.home ? 'skyblue' : 'white', fontSize:activeLinkStatus===status.home ? '1.2rem' : '1.05rem'}} onClick={() => changeActiveLinkStatus(status.home)}>Home</a>
            </li>
            <li className='list-item-sm' >
                <a href='#skills-section' className='menu-item-sm' style={{color: activeLinkStatus===status.skills ? 'skyblue' : 'white', fontSize:activeLinkStatus===status.skills ? '1.2rem' : '1.05rem'}} onClick={() => changeActiveLinkStatus(status.skills)}>Skills</a>
            </li>
            <li className='list-item-sm'>
                <a href='#my-projects' className='menu-item-sm' style={{color: activeLinkStatus===status.projects ? 'skyblue' : 'white', fontSize:activeLinkStatus===status.projects ? '1.2rem' : '1.05rem'}} onClick={() => changeActiveLinkStatus(status.projects)}>Projects</a>
            </li>
            <li className='list-item-sm'>
                <a href='#contact-section' className='menu-item-sm' style={{color: activeLinkStatus===status.contact ? 'skyblue' : 'white', fontSize:activeLinkStatus===status.contact ? '1.2rem' : '1.05rem'}} onClick={() => changeActiveLinkStatus(status.contact)}>Contact Me</a>
            </li>
        </ul>
    </div>
  )
}

export default MobileNav