import React from 'react'
import './Hero.css'
import hero_image from "../Assets/hero.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHand } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="hero" />
        </div>
    </div>
  )
}

export default Hero