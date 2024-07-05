import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { styles } from '../styles';
import HeroImg from '../assets/hero-img.png';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(".hero-desc", {
      strings: ["Web Developer", "Front End Developer", "Android Developer", "Software Developer"],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    // Main Container 
    <section id="home" className='relative w-full h-screen mx-auto hero-section bg-cover bg-no-repeat bg-center hero-main'>
      <div className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-5`}>
          {/* Left Line Gradient Effect  */}
          <div className='line-effect-hero' >
              <div className='w-5 h-5 rounded-full bg-[#915eff] circle'/>
              <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>

          {/* Content  */}
          <div className='hro-text-section'>
              <h1 className={`${styles.heroHeadText} text-white hero-h1`}> Hi, I'm <span className='text-[#915eff]'>Dhvani</span> Maktuporia </h1>
              <span className={`${styles.heroSubText} text-white-100 hero-desc`}> </span>
              <div className='lg:flex flex-cols social-media'>
                  <button className='social-media-btn'>
                      <a href='https://github.com/Dhvani365/'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg></a>
                  </button>
                  <button className='social-media-btn'>
                      <a href='https://www.linkedin.com/in/dhvani-maktuporia-326565222/'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg></a>
                  </button>
                  <button className='social-media-btn'>
                      <a href='#'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                      </svg></a>
                  </button>
                  <button className='social-media-btn'>
                  <a href='#'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                      </svg></a>
                  </button>
                  <button className='social-media-btn'>
                  <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLdVxSBzBHbtvXkHnQNKJcSGkCkcDTHqHMfZhJNJWNStsTbNBDmSLwfcnnDtWTtsCmFzDs'><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                      </svg></a>
                  </button>
              </div>
          </div>
      </div>
      {/* Bitmoji Rendering  */}
      <div className='hero-img-section'>
            <img src={HeroImg}/>
      </div>
    </section>    
  )
}

export default Hero;