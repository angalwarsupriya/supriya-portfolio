import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
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
  AOS.init();
 
  return (
    <section id='contact-section' className='foooter-con'>
        <h3 className='contact-me-h'>Contact me</h3>
        <div className='contact-overview-con'>

        
        <div className="contact-details-con" data-aos='slide-right'>
          <div className='footer-img-con'>
            <img src='images/rb_7327.png' alt= 'get in toch' className='footer-img' />
          </div>
        </div>

        <div className="form-details-con" data-aos='slide-left'>
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
                <textarea id='message'  placeholder='message that you want to send' cols={65} rows={10} />
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

