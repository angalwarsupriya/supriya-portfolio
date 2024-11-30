import './index.css'

import SkillCard from '../SkillCard'


import { useState } from 'react'

const skillsData = [
  {
  title:'Frontend',
  icon:"images/responsive.png",
  skillsOb:[
      {skill:"HTML", percentage:"80%"},
      {skill:"CSS", percentage:"90%"},
      {skill:"Javascript", percentage:"85%"},
      {skill:"React JS", percentage:"95%"},
      {skill:"Boostarp", percentage:"75%"},
  ]
},     
{
  title:'Backend',
  icon:"images/digital-transformation_15594457.png",
  skillsOb:[
      {skill:"Node JS", percentage:"70%"},
      {skill:"Express JS", percentage:"65%"},
  ]
},
{
  title:'Tools',
  icon:"images/work_16768526.png",
  skillsOb:[
      {skill:"Git & Github", percentage:"70%"},
      {skill:"VS code", percentage:"75%"},
      {skill:"Webpack", percentage:"60%"},
      {skill:"Responsive Design", percentage:"70%"},
  ]
},
{
  title:'Soft Skills',
  icon:"images/emerging-industries_15568329.png",
  skillsOb:[
      {skill:"Problem Solving", percentage:"80%"},
      {skill:"Colabration", percentage:"85%"},
      {skill:"Atention to Detail", percentage:"78%"},
  ]
}

]


function Skills() {

    const [activeSkillObject, changeActiveSkillObject] = useState(skillsData[0])
    const changeActiveSkillFun = (skillDe)=> {
        changeActiveSkillObject(skillDe)
    }

  return (
    <section id='skills-section' className='skills-section-con'>
       <h2 className='tech-pro-hea'>Technical Proficiency</h2>
       <div className='skills-showcase-con'>
         <div className='skills-details-box-con'>
            <ul className='boxes-container'>
                {skillsData.map((skillDetail)=>(
                    <SkillCard key={skillDetail.title} skillDetail={skillDetail} changeActiveSkillFun={changeActiveSkillFun}/>
                ))}
            </ul> 
         </div>
         <div className='skills-details-percent-con'>
            <h3 className='activeSkillHea'>{activeSkillObject.title}</h3>
            <hr/>
            <div className='progress-cells-con-container'>
               {activeSkillObject.skillsOb.map((eachSkill)=>(
                    <div className='progress-cell' key={eachSkill.skill}>
                        <div className='progress-title-percent-row'>
                          <p className='skill-name'>{eachSkill.skill}</p>
                          <p className='skill-percentage'>{eachSkill.percentage}</p>
                        </div>

                        <div className='progress-bar-bg'>
                           <div className='progress-bar' style={{width:eachSkill.percentage}}></div>
                        </div>
                    </div>
))}
            </div>
         </div>
        </div>
      
    </section>
  )
}

export default Skills