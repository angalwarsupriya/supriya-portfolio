import './index.css'

function SkillCard(props) {
  const {skillDetail, changeActiveSkillFun} = props
  const changeSkill= ()=>{
    changeActiveSkillFun(skillDetail)
  }
  return (
    <div className='skills-title-con' onClick={changeSkill}>
        <div className='skill-logo-con'>
          <img className='skill-type-logo' alt={skillDetail.title} src={skillDetail.icon}/>
        </div>
        <span className='spanw'>{skillDetail.title}</span>
    </div>
  )
}

export default SkillCard