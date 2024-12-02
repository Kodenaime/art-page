import React from 'react'

import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <section className="hero">
        <div className="container hero-container">
            <img src={hero} alt="" />
           <div className="content">
                <h1>The Birth of Venus</h1>
                <p>A modern reimagining of Sandro Botticelli's iconic painting, featuring a diverse cast of models and a lush, tropical setting. 
                This exhibit explores the intersection of female beauty ideals, art history, and contemporary culture.
                </p>
                <a className="btn">Learn More</a>
           </div>
        </div>
    </section>
  )
}

export default Hero