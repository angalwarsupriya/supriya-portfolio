
import './index.css'
import { useState } from 'react';

import EachProject from '../EachProject';

import { PiGreaterThan } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";

// projects data //
const projectsData = [
  {
    id:1,
    projectTitle:'Nxt trends',
    projectDescription:'This is a responsive e-commerce application.',
    projectImg:"images/Frame 1 (4).png",
    link: 'https://NxtBuy.ccbp.tech',
    gitLink:'https://github.com/angalwarsupriya/nxt-watch-video-player-app',
    techUsed:'React, CSS, Js'
    },
    {
    id:2,
    projectTitle:'Food Munch',
    projectDescription:'The food much app designed for order food an view menus, Food items, with very well picturs.',
    projectImg: "images/Frame 1 (2).png",
    techUsed:'HTML, CSS, Bootstrap'
    },
 
    {
    id:3,
    projectTitle:'Emoji Game',
    projectDescription:"This is an engaging and interactive web-based game designed to test users memory and concentration skills. Players are presented with a grid of cards, each containing an emoji. The objective is to match pairs of identical emojis by flipping the cards. The game tracks the player's score.",
    projectImg:"images/Frame 1 (7).png",
    lengthink: 'https://craztGame.ccbp.tech',
    techUsed:'React, CSS, Js'
    },
 
    {
    id:4,
    projectTitle:'Nxt Watch',
    projectDescription:'This is a React-based application similar to YouTube. Users can log in and watch various types of videos, including trending videos, gaming videos, and saved videos.',
    projectImg:"images/Frame 1 (1).png",
    link: 'https://nxt-watch-video-player-box.vercel.app/',
    techUsed:'React, CSS, Js'
    },
    {
    id:5,
    projectTitle:'All Projects',
    projectDescription:'The all projects its my all Projects showing dynamic Web page, Can search by title of Project, it includes my all Static, Dynamic and Responsive Projects',
    projectImg: "images/Frame 1 (3).png",
    techUsed:'HTML, CSS, JS'
    },
    {
    id:6,
    projectTitle:'Jobby App',
    projectDescription:'This app provides a user-friendly platform for job seekers. Users can log in, access job opportunities, and apply with ease2. The app includes features like job filtering by title and salary range, and it ensures user authentication using JWT tokens. in this we can search Jobs by Role like Frontend, and can filter based on the salary package and based on Job Type Like Internship..',
    projectImg:"images/Frame 1 (5).png",
    link: 'http://jobsBox.ccbp.tech',
    techUsed:'React, CSS, Js'
    },
    {
    id:7,
    projectTitle:'Eco',
    projectDescription:'This app provides a user-friendly platform for job seekers. Users can log in, access job opportunities, and apply with ease2. The app includes features like job filtering by title and salary range, and it ensures user authentication using JWT tokens. in this we can search Jobs by Role like Frontend, and can filter based on the salary package and based on Job Type Like Internship..',
    projectImg: "images/Frame 1 (8).png",
    techUsed:'React, CSS, Js'
    }
       
 ]


 // starts functional component from here //
function MyProjects() {
  
  // manage project id, details for render //
  const [activeProjectId, changeActiveProjectId] = useState(0)

 
  // moving to previous project //
  const moveToPrev = () => {
    if (activeProjectId > 1) {
      changeActiveProjectId((preve) => preve - 1)
    }
  }
  
  // moving to next project */
  const moveToNext = () => {
    if (activeProjectId < 6) {
        changeActiveProjectId((preve) => preve + 1)
    }
  }
  
  // active project  details to send as prop //
  const projectDetails = projectsData[activeProjectId]
  
  // returning ui //
  return (
    <section id='my-projects' className='my-projects-section-bg-con'>

      <h2 className='my-projects-hea'>My Projects</h2>
    
      <EachProject projectDetails={projectDetails} />
      
      <div className='pagination-con'>
        <div className='paginations-btn-con'>
          
          <button className='less-btn' onClick={moveToPrev}>
            <PiLessThan className='icon'/>
          </button>
               
          <button className='greate-btn'>
            <PiGreaterThan className='icon'  onClick={moveToNext}/>
          </button>

        </div>
      </div>
        
    
    </section>
  )
}

export default MyProjects