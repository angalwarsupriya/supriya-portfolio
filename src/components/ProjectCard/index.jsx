import './index.css'
import { FaLink } from "react-icons/fa6";

function ProjectCard(props) {
const {proDetail } = props
  return (
    
    <div className='project-card-con flip-card'>
    <div className="flip-card-inner">
        <div className='project-card-img-con flip-card-front'>
           <img className='project-img' alt={proDetail.projectTitle} src={proDetail.projectImg}/>
        </div>
        <div className="project-about-con flip-card-back">
            <h4 className='project-name'>{proDetail.projectTitle}</h4>
            <p className='project-des'>{proDetail.projectDescription}</p>
            {proDetail.link !== undefined ? 
            <a href={proDetail.link} target='_blank'><FaLink className='project-link-icon'/></a> : '' }    
        </div>
        </div>
    </div>

  )
}

export default ProjectCard