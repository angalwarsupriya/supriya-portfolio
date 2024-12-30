import React from 'react'
import './index.css'

import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..




function EachProject(props) {

  AOS.init();

  const {projectDetails}= props

  return (
      <div className='projects-con'>
      
      <div className='project-details-section' data-aos='slide-right'>
          <div className='h-row'>
          <h3 className='project-number-hea'>0{projectDetails.id}</h3>
          <h2 className='project-name'>{projectDetails.projectTitle}</h2>
          </div>
          <p className='project-p'>{projectDetails.projectDescription}</p>

          <div className='tecnolgies-con'>
          <p className='tecnology-p'>{projectDetails.techUsed}</p>
          </div>
        
          <hr style={{width:'100%'}}/>

          <div className='icons-row'>
            <div className='link-icon-round-con'>
              <a className='link-a' href={projectDetails.link} target='_blank'>
                <GoArrowUpRight className='link-icon'/>
              </a>
            </div>

            <div className='link-icon-round-con'>
              <a className='link-a' href={projectDetails.gitLink} target='_blank'>
                <FaGithub className='link-icon'/>
              </a>
            </div>
          </div>   
        </div>
    
        <div className='project-img-section' data-aos='slide-left'>
          <div className='project-img-con'>
            <img src={projectDetails.projectImg} className='project-img' alt='project-img'/>
          </div>
        </div>
        
      </div>
  )
}

export default EachProject