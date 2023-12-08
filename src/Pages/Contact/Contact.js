import React from 'react'
import {FaEnvelopeOpen,FaPhoneSquareAlt
} from 'react-icons/fa';
import {FiSend} from 'react-icons/fi';
import "./Contact.css"

function Contact() {
  return (
    <section className='contact section'>
        <h2 className='section__title'>Get In  <span>Touch</span></h2>
        <div className='contact__container container grid'>
          <div className='contact__data'>
            <h3 className='contact__title'>Dont't be Shy !</h3>
            <p className='contact__description'>Feel free to contact. I am always open to discuss 
            new projects and creative ideas.  </p>
            <div className='contact__info'>
              <div className='info__item'>
                <FaEnvelopeOpen className='info__icon'/>
                <div>
                  <span className='info__title'>Mail me</span>
                  <h4 className='info__desc'>vikassaban1010@gmail.com</h4>
                </div>
              </div>
              <div className='info__item'>
                <FaPhoneSquareAlt className='info__icon'/>
                <div>
                  <span className='info__title'>Call me</span>
                  <h4 className='info__desc'>8053987090</h4>
                </div>
              </div>
            </div>
            {/* <div className='contact__socials'>
          <a href='www.google.com' className='contact__social-link'><FaFacebookF/></a>
          <a href='www.google.com' className='contact__social-link'><FaTwitter/></a>
          <a href='www.google.com' className='contact__social-link'><FaYoutube/></a>
          <a href='www.google.com' className='contact__social-link'><FaDribbble/></a>
            </div> */}
          </div>
          <form className='contact__form'>
            <div className='form__input-group'>
              <div className='form__input-div'>
                <input type='text' className='form__control' placeholder='Your Name'/>
              </div>
              <div className='form__input-div'>
                <input type='email' className='form__control' placeholder='Your Email'/>
              </div>
              <div className='form__input-div'>
                <input type='text' className='form__control' placeholder='Subject'/>
              </div>
            </div>
            <div className='form__input-div'>
               <textarea className='form__control' placeholder='Your Message'/>
              </div>
              <button className='button'>
                Send Message
                <span className='button__icon contact__button-icon'><FiSend/></span>
              </button>
          </form>
        </div>
    </section>
  )
}

export default Contact
