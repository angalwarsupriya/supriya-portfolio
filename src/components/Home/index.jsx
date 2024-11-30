import './index.css'
function Home() {

  const onclickResume = ()=>{
    window.open('https://docs.google.com/document/d/1shhpZFzQqZZIM6SFqspIOOw2Ys4i_OIPzyBmVqlJkP8/edit?tab=t.0')
  }
  return (
    <section id='hero-section' className='hero-bg-con'>
       <div className='hero-content-section'>
        <h1 className='hero-hea'>  <span className='span'>I'm Supriya Angalwar</span>  Frontend Devloper,  Designer Intrested in Bakend also</h1>
       
        <p className='hero-p'>Passionate Frontend Developer! Transforming Idias Into Seamless and Vissuallys stunning WEb solutions.</p>
        <button className='glowing-btn' onClick={onclickResume}><span className='glowing-txt'>RE<span className='faulty-letter'>SU</span>ME</span></button>
    
      </div>
      <div className='hero-img-section'>
        <div className='hero-img-con'>
          <div className='tec-round-con'>
            <img className='technology-img' alt='react' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732532409/react_ubvkrf.svg'/>
          </div>
          <img className='hero-img' alt='profile-img' src='./images/sweety (3).jpg'/>
        </div>
        
        <div className='tech-logoes-con'>
          <div className='tec-round-con'>
            <img className='technology-img' alt='javascript' src='images/icons8-javascript-48.png'/>
          </div>
          <div className='tec-round-con'>
            <img className='technology-img' alt='html' src='images/icons8-html-5-48.png'/>
          </div>
          <div className='tec-round-con'>
            <img className='technology-img' alt='css' src='images/icons8-css3-48.png'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

