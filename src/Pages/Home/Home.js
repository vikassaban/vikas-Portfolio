import React from 'react';
import Profile from '../../assets/vikas2.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./Home.css";

function Home() {
  return (
    <div>
      <section className='home section grid'>
      <img src={Profile} alt='' className='home__img'/>
      <div className='home__content'>
      <div className='home__data'>
        <h1 className='home__title'>
          <span>I'm Vikas Kumar.</span>
          <br/>
          Web Developer</h1>
          <p className='home__description'>I'm a Web Designer and Front-end Developer focused on crafting clean and user-friendly
          experences, I am passionate about building excellent software that improves the lives of those around me.</p>
          <Link to='/about' className='button'>
            More About Me
            <span className='button__icon'><FaArrowRight/></span>
          </Link>
      </div>
      </div>
      <div className='color__block'></div>
      </section>
    </div>
  )
}

export default Home
