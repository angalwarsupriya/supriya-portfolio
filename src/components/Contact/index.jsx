import './index.css'


import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const contactDetails = [
  {name:'Linkdin', value:'shhdjlalsakdjkfjdl/' , logo:MdEmail},
  {name:'Twitter', value:'http:??twitter.com',logo:FaTwitter},
  {name:'Github', value:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", logo:FaGithub},
  {name:"Phone", value:"(91) 9676069482",logo:FaPhone },
  {name:'Address', value:'Adilabad, Telangana', logo:FaLocationDot}
]

function Contact() {
 
  return (
    <section id='contact-section' className='foooter-con'>
        <h3 className='contact-me-h'>Contact me</h3>
        <div className='contact-overview-con'>
        <div className="contact-details-con">
          <div className='row'>
               <FaLinkedin className='contact-icons linkdin-icon'/>
              <a target='_blank' href='ttps://www.linkedin.com/in/supriyaangalwar/' className='contact-value'>https://www.linkedin.com/in/supriyaangalwar/</a>
          </div>
          <div className='row'>
                <FaTwitter className='contact-icons twitter-icon'/>
               <a  target='_blank' href='https://twitter.com/AngalwarSupriya' className='contact-value'>https://twitter.com/AngalwarSupriya</a>
           </div>

           <div className='row'>
              <FaGithub className='contact-icons github-icon'/>
               <a  target='_blank' href='https://github.com/angalwarsupriya/' className='contact-value'>https://github.com/angalwarsupriya/</a>
           </div>

           <div className='row'>
               <FaPhone className='contact-icons phone-icon'/>
               <p className='contact-value'>(91) 9676069482</p>
           </div>

           <div className='row'>
                <FaLocationDot className='contact-icons location-icon'/>
               <p className='contact-value'>Adilabad, Telangana</p>
           </div>    
        </div>


        <div className="form-details-con">
            <form  className='form-con' >
              <div className='names-input-row'>
              <div className='name-input-con'>
                <label htmlFor='firstname'>Firstname</label>
                <input type='text' id='firstname' placeholder='Your Firstname' className='nameinput' />
              </div>
              <div className='name-input-con'>
                <label htmlFor='lastname'>Lastname</label>
                <input type='text'id='lastname' placeholder='Your Lastname' className='nameinput' />
              </div>
              </div>
              <div className='input-con'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Enter Your Email' className='email-input'/>
              </div>
              <div className='input-con'>
                <label htmlFor='message'>Message</label>
                <textarea id='message'  placeholder='message that you want to send' cols={76} rows={10} />
              </div>
              <button type='button' className='send-btn' id="sendButton">
              <span  className="button-text">Send</span>
                <PiPaperPlaneRightFill className='icon-plane'/>
              </button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

