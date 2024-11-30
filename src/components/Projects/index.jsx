import './index.css'
import ProjectCard from '../ProjectCard'

const projectsData = [
   {
   projectTitle:'Food Munch',
   projectDescription:'The food much app designed for order food an view menus, Food items, with very well picturs.',
   projectImg:"images/Screenshot_26-11-2024_103318_www.bing.com.jpeg",
   },
   {
   projectTitle:'Emoji Game',
   projectDescription:"This is an engaging and interactive web-based game designed to test users memory and concentration skills. Players are presented with a grid of cards, each containing an emoji. The objective is to match pairs of identical emojis by flipping the cards. The game tracks the player's score, updating the top score with each successful match. The game features a responsive design, ensuring a seamless experience across various devices.",
   projectImg:"images/Screenshot_26-11-2024_11310_www.bing.com.jpeg",
   link:'https://craztGame.ccbp.tech'
   },
   {
   projectTitle:'Nxt trends',
   projectDescription:'This is a responsive e-commerce application inspired by platforms like Amazon. Users can browse, filter, and search for products. Secure user authentication ensures personalized experiences. Users can add items to a shopping cart and proceed through a seamless checkout process, The app ensures a responsive design for a smooth user experience across all devices. that allows users to search, and purchase products. It features user authentication, product filtering, and a dynamic shopping cart with real-time updates.',
   projectImg:"images/Screenshot_26-11-2024_11727_www.bing.com.jpeg",
   link:'https://NxtBuy.ccbp.tech'
   },
   {
   projectTitle:'Nxt Watch',
   projectDescription:'This is a React-based application similar to YouTube. Users can log in and watch various types of videos, including trending videos, gaming videos, and saved videos1. The project involves implementing features like user authentication, state management, context, page navigation, and responsive design using media queries and flexbox. The app also includes functionality to search for videos and view specific video details1.',
   projectImg:"images/Screenshot_25-11-2024_235352_www.bing.com.jpeg",
   link:'https://nxt-watch-video-player-box.vercel.app/'
   },
   {
   projectTitle:'All Projects',
   projectDescription:'The all projects its my all Projects showing dynamic Web page, Can search by title of Project, it includes my all Static, Dynamic and Responsive Projects',
   projectImg:"images/Screenshot_26-11-2024_112520_angalwarsupriyaed25brjsceqhz58.drops.nxtwave.tech.jpeg",
   },
   {
   projectTitle:'Jobby App',
   projectDescription:'This app provides a user-friendly platform for job seekers. Users can log in, access job opportunities, and apply with ease2. The app includes features like job filtering by title and salary range, and it ensures user authentication using JWT tokens. in this we can search Jobs by Role like Frontend, and can filter based on the salary package and based on Job Type Like Internship..',
   projectImg:"images/Screenshot_26-11-2024_12427_www.bing.com.jpeg",
   link:'http://jobsBox.ccbp.tech'
   }
      
]


function Projects() {
  return (
     <section id='my-projects' className='projects-section-con'>
        <h2 className='projects-hea'>Projects</h2>
        <div className='displaying-projects-con'>
            {projectsData.map((proDetail)=>(
               <ProjectCard proDetail={proDetail} key={proDetail.projectTitle}/>
            ))}
        </div>         
     </section>
  )
}

export default Projects


