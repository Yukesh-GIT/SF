import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart,faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
        </div>
        <div className="hero-right">
            <div className="hand-hand-icon">
                <p>new</p>
                <FontAwesomeIcon icon={faHandHoldingHeart} />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    </div>
  )
}

export default Hero