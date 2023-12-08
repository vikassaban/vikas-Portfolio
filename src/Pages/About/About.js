import React from 'react';
import Info from '../../Components/Info';
import Stats from '../../Components/Stats';
import { FaDownload } from 'react-icons/fa';
import CV from "../../assets/vikas.pdf";
import Skills from '../../Components/Skills';
import { resume } from '../../data';
import "./About.css"
import ResumeItem from '../../Components/ResumeItem';

function About() {
  return (
    <div>
      <main className='section container'>
        <section className='about'>
          <h2 className='section__title'>
            About <span>Me</span>
          </h2>
          <div className='about__container grid'>
            <div className='about__info'>
              <h3 className='section__subtitle'>Personal Infos</h3>
              <ul className='info__list grid'>
                <Info/>
              </ul>
              <a href={CV} className='button'>Download CV
              <span className='button__icon'><FaDownload/>  </span>
              </a>
            </div>
            <div className='stats grid'>
              <Stats/>
            </div>
          </div>
        </section>
        <div className='separator'></div>
        <section className='skills'>
          <h3 className='section__subtitle subtitle__center'>My Skills</h3>
          <div className='skills__container grid'>
            <Skills/>
          </div>
        </section>
        <div className='separator'></div>
        <section className='resume'>
        <h3 className='section__subtitle subtitle__center'>Experience & Education</h3>
        <div className='resume_container grid d-flex'>
          <div className='resume_data'>
            {resume.map((val)=>{
              if(val.category==='experience'){
                return<ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>
          <div className='resume_data'>
            {resume.map((val)=>{
              if(val.category==='education'){
                return<ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>
        </div>
        </section>
      </main>
    </div>
  )
}

export default About
