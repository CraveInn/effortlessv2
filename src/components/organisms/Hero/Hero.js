import React from 'react';
import './Hero.css';

const Hero = () => {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <h1>Build & Manage Your Website —<br />Straight from Google Sheets.</h1>
      <p>No coding, no backend, no hassle. Update your website anytime — simply by editing a sheet.</p>
    <div className="cta-buttons">
      <button className="primary-btn">Get Started 🚀</button>
      <button className="secondary-btn" onClick={() => handleScroll('howitworks')}>See How It Works</button>
    </div>
  </section>
);
}

export default Hero; 