import React from 'react';
import Contact from '../assets/www.biotechpackages.com/images/contact.png'
import Whatsapp from '../assets/www.biotechpackages.com/images/icons/1.png'
import Insta from '../assets/www.biotechpackages.com/images/icons/2.png'
import Linke from '../assets/www.biotechpackages.com/images/icons/3.png'
import Map from '../components/map'
import Cont from '../assets/www.biotechpackages.com/contact.mp4'
// import Footerc from '../assets/www.biotechpackages.com/images/icons/footer_change.png'

const Contacts = () => {

  return (
    <>
      <div className="main_Class_biotech">
        <video className="biotech_video_section" width="100%" autoPlay loop muted>
          <source
            className="biotech_video"
            src={Cont}
            type="video/mp4"
          />
          

      </video>
      <div className="bg_image" style={{ width: '100%' }}>
        <img src={Contact} alt="" style={{ width: '100%' }} />
      </div>
      <div className="container">
        <div className="img_data">
          <div className="main_contact">
            <div className="main_num">
              <a href="tel:+923467133632" style={{ color: 'white' }}>
                <p className="num">+92 346 7133632</p>
              </a>
              <a href="mailto:Info@ayraprint.com" style={{ color: 'white' }}>
                <p className="num nums">Info@ayraprint.com</p>
              </a>
              <a href="tel:+92 346 7133632">
                <button className="butns">BOOK CALL</button>
              </a>
            </div>
            <div className="icons">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=+923467133632&amp;text=Salam.">
                <img src={Whatsapp} alt="" />
              </a>
              <a target="_blank" href="https://www.instagram.com/biotechpackagespvt/">
                <img src={Insta} alt="" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/biotechpackages-pvt-ltd/">
                <img src={Linke} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
      <div class="main_form">
        <div class="form">
          <h3>DO YOU HAVE A QUESTION?</h3>
          <p>We’d love to hear from you!</p>
          <form>
            <div class="first_last">
              <div class="first">
                <input type="text" placeholder="First Name" name="firstname" value="" />
              </div>
              <div class="last">
                <input type="text" placeholder="Last Name" name="lastname" value="" />
              </div>
            </div>
            <div class="mail_num">
              <div class="mail">
                <input type="email" placeholder="Enter your email*" name="email" value="" />
              </div>
              <div class="num">
                <input type="number" placeholder="Enter phone no*" name="phone" value="" />
              </div>
            </div>
            <div class="text_area">
              <textarea name="message" cols="100" rows="10" placeholder="How can we help you!"></textarea>
            </div>
            <div>
              <button class="send_button">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
      <Map />
      
    </>
  );
}

export default Contacts;
