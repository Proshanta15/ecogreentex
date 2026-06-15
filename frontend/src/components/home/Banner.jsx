import React from 'react'
import BannerVideo from '../../../src/assets/video.mp4'

const Banner = () => {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={BannerVideo} type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="hero-overlay"></div>
      
      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Your Global Partner
          <span className="hero-subtitle-line">For Sustainable Apparel Sourcing</span>
        </h1>
        
        <p className="hero-description">
          Eco Green Tex Ltd. is an ISO-certified buying house in Dhaka, connecting world-class fashion
          brands with trusted, ethical factories across Bangladesh. We deliver uncompromised
          quality and timely delivery for every collection.
        </p>
        
        <button className="hero-btn">
          EXPLORE OUR SERVICES
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  )
}

export default Banner
