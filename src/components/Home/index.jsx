import './index.css'
import './style.scss'


// importing aos fro scrool animations //

import AOS from 'aos';
import 'aos/dist/aos.css';

// importing react-icos//
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

// start funtional component from here */

function Home() {

  AOS.init()

 
  return (

    <section id='hero-section' className='hero-bg-con'>
      <div className='hero-content-section'>
        <h1 aria-label="Hi! I'm a developer" className='h1'>
          Hi! I'm  

          <span className='name-span'> Supriya,</span>
          &nbsp;
          <span className="typewriter"></span>
          <br/>
          <span className='span-dev'>Developer </span>
        </h1>

        <p className='hero-p'>Passionate Frontend Developer! Transforming Idias Into Seamless and Vissuallys stunning WEb solutions.</p>
        
        <div className='home-links-con'>
          <a className='resume-btn' href='https://docs.google.com/document/d/1shhpZFzQqZZIM6SFqspIOOw2Ys4i_OIPzyBmVqlJkP8/edit?tab=t.0' target='_blank'>Resume</a>
          <div className='round-btns-con'> 
            <a className='button-round' href='https://github.com/angalwarsupriya' target='_blank' >
               <FaGithub className='btn-icon'/>
            </a>
  
            <a className='button-round' href='https://www.linkedin.com/in/supriyaangalwar/' target='_blank'>
              <CiLinkedin className='btn-icon'/>
            </a>
            
            <a className='button-round' href='https://x.com/AngalwarSupriya' target='_blank'>
              <CiTwitter className='btn-icon'/>
            </a>
          </div>
        </div>
      </div>


      <div className='hero-img-section'>
        <div className='hero-img-con' >  
          <div className='box'>
             <img className='hero-img' src='/images/2.jpg' alt='profilr image'/>
          </div>   
        </div>
      </div>

    </section>
  )
}

export default Home
