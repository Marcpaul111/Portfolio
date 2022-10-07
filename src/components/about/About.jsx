import React from 'react'
import '../about/about.css'
import AboutImg from '../../assets/avatar-2.svg';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={AboutImg} alt="About-img" className="about__img" />
      </div>

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">
            I'm Marco Lazaro, web developer from Nueva Ecija, Philippines. Fresh out from bootcamps and built several web applications with both backend and frontend tech stacks. 
            <a href='' className="btn">Download CV</a>
          </p>
        </div>

        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
               <h3 className="skills__name"> HTML </h3>
                <span className="skills__number html">95%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
               <h3 className="skills__name css">CSS</h3>
                <span className="skills__number">80%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
               <h3 className="skills__name javascript"> JavaScript </h3>
                <span className="skills__number">75%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
               <h3 className="skills__name react"> React JS </h3>
                <span className="skills__number">75%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
               <h3 className="skills__name nodejs"> Node JS </h3>
                <span className="skills__number">60%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage"></span>
          </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name php"> PHP </h3>
                  <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name mysql"> MySQL </h3>
                  <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name database mongodb"> MongoDB </h3>
                  <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
         

        </div>
      </div>
      </div>
    </section>
  )
}

export default About