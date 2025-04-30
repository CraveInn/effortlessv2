import React, { useState } from 'react';
import ProjectModal from '../../molecules/ProjectModal/ProjectModal';
import './Hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectCreate = (projectName) => {
    // Here you would handle the project creation
    console.log('Creating project:', projectName);
    setIsModalOpen(false);
  };

  return (
    <section className="hero-section" id="home">
      <h1>Build & Manage Your Website —<br />Straight from Google Sheets.</h1>
      <p>No coding, no backend, no hassle. Update your website anytime — simply by editing a sheet.</p>
      <div className="cta-buttons">
        <button className="primary-btn" onClick={() => setIsModalOpen(true)}>
          Get Started 🚀
        </button>
        <button className="secondary-btn" onClick={() => handleScroll('howitworks')}>
          See How It Works
        </button>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleProjectCreate}
      />
    </section>
  );
}

export default Hero; 