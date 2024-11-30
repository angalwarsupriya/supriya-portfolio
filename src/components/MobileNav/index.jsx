import './index.css'

const status = {
    home:'HOME',
    skills:"SKILLS",
    projects:'PROJECTS',
    contact:'CONTACT'
}

function MobileNav(props) { 

  const {menuStatus} = props
  
  const menuStaAct = menuStatus ? '' : 'active'
  
  return (
    <div className={`mobile-nav-con ${menuStaAct}`}>
        <ul className='nav-bar-in-sm'>
            <li className='list-item-sm' >
                <a href='#hero-section' className='menu-item-sm menu-item' >Home</a>
            </li>
            <li className='list-item-sm' >
                <a href='#skills-section' className='menu-item-sm menu-item' >Skills</a>
            </li>
            <li className='list-item-sm'>
                <a href='#my-projects' className='menu-item-sm menu-item' >Projects</a>
            </li>
            <li className='list-item-sm'>
                <a href='#contact-section' className='menu-item-sm menu-item' >Contact Me</a>
            </li>
        </ul>
    </div>
  )
}

export default MobileNav