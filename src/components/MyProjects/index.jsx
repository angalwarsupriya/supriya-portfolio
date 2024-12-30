
import './index.css'

import { PiGreaterThan } from "react-icons/pi";
import { PiLessThan } from "react-icons/pi";
import EachProject from '../EachProject';
import { useState } from 'react';



const projectsData = [
    {
    id:1,
    projectTitle:'Food Munch',
    projectDescription:'The food much app designed for order food an view menus, Food items, with very well picturs.',
    projectImg:"images/Frame 1 (2).png",
    },
 
    {
    id:2,
    projectTitle:'Emoji Game',
    projectDescription:"This is an engaging and interactive web-based game designed to test users memory and concentration skills. Players are presented with a grid of cards, each containing an emoji. The objective is to match pairs of identical emojis by flipping the cards. The game tracks the player's score, updating the top score with each successful match. The game features a responsive design, ensuring a seamless experience across various devices.",
    projectImg:"images/Frame 1 (7).png",
    link:'https://craztGame.ccbp.tech'
    },
 
    {
    id:3,
    projectTitle:'Nxt trends',
    projectDescription:'This is a responsive e-commerce application inspired by platforms like Amazon. Users can browse, filter, and search for products. Secure user authentication ensures personalized experiences. Users can add items to a shopping cart and proceed through a seamless checkout process, The app ensures a responsive design for a smooth user experience across all devices. that allows users to search, and purchase products. It features user authentication, product filtering, and a dynamic shopping cart with real-time updates.',
    projectImg:"images/Frame 1 (4).png",
    link:'https://NxtBuy.ccbp.tech'
    },
    {
    id:4,
    projectTitle:'Nxt Watch',
    projectDescription:'This is a React-based application similar to YouTube. Users can log in and watch various types of videos, including trending videos, gaming videos, and saved videos1. The project involves implementing features like user authentication, state management, context, page navigation, and responsive design using media queries and flexbox. The app also includes functionality to search for videos and view specific video details1.',
    projectImg:"images/Frame 1 (1).png",
    link:'https://nxt-watch-video-player-box.vercel.app/'
    },
    {
    id:5,
    projectTitle:'All Projects',
    projectDescription:'The all projects its my all Projects showing dynamic Web page, Can search by title of Project, it includes my all Static, Dynamic and Responsive Projects',
    projectImg:"images/Frame 1 (3).png",
    },
    {
    id:6,
    projectTitle:'Jobby App',
    projectDescription:'This app provides a user-friendly platform for job seekers. Users can log in, access job opportunities, and apply with ease2. The app includes features like job filtering by title and salary range, and it ensures user authentication using JWT tokens. in this we can search Jobs by Role like Frontend, and can filter based on the salary package and based on Job Type Like Internship..',
    projectImg:"images/Frame 1 (5).png",
    link:'http://jobsBox.ccbp.tech'
    },
    {
    id:7,
    projectTitle:'Eco',
    projectDescription:'This app provides a user-friendly platform for job seekers. Users can log in, access job opportunities, and apply with ease2. The app includes features like job filtering by title and salary range, and it ensures user authentication using JWT tokens. in this we can search Jobs by Role like Frontend, and can filter based on the salary package and based on Job Type Like Internship..',
    projectImg:"images/Frame 1 (8).png",
    }
       
 ]


function MyProjects() {

  const [activeProjectId, changeActiveProjectId] = useState(0)

 

  const moveToPrev = ()=>{
    changeActiveProjectId((preve)=> preve-1)
  }
  

  const moveToNext = ()=>{
    changeActiveProjectId((preve)=> preve+1)
  }
  
  const projectDetails = projectsData[activeProjectId]
  console.log(projectDetails)
  
  return (
    <section id='' className='my-projects-section-bg-con'>
        <h2 className='my-projects-hea'>My Projects</h2>


         <EachProject projectDetails={projectDetails}/>


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