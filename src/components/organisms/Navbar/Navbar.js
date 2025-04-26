import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'Features', to: 'features' },
  { label: 'Highlights', to: 'highlights' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Reviews', to: 'reviews' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Effortless</h1>
        {/* <span className="tagline">Website Management Made Simple</span> */}
      </div>
      <div className="nav-links-desktop">
        {navLinks.map((link) => (
          <button key={link.to} className="nav-link" onClick={() => handleScroll(link.to)}>
            {link.label}
          </button>
        ))}
      </div>
      <div className="burger-menu" onClick={() => setMenuOpen(true)}>
        <FaBars size={24} />
      </div>
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <button className="close-btn" onClick={() => setMenuOpen(false)}><FaTimes size={24} /></button>
            {navLinks.map((link) => (
              <button key={link.to} className="nav-link" onClick={() => handleScroll(link.to)}>
                {link.label}
              </button>
            ))}
            <button className="mobile-cta" onClick={() => handleScroll('contact')}>Contact Us</button>
            <button className="mobile-cta primary" onClick={() => handleScroll('pricing')}>Get Started 🚀</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 