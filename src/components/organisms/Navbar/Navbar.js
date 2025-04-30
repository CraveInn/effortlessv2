import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'Features', to: 'features' },
  { label: 'Highlights', to: 'highlights' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Reviews', to: 'reviews' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If we're already on home page, just scroll to the section
      const el = document.getElementById(sectionId);
      if (el) {
        const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle scroll after navigation
  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);
      if (el) {
        const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick}>
        <h1>Effortless</h1>
        {/* <span className="tagline">Website Management Made Simple</span> */}
      </div>
      <div className="nav-links-desktop">
        {navLinks.map((link) => (
          <button key={link.to} className="nav-link" onClick={() => handleNavigation(link.to)}>
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
              <button key={link.to} className="nav-link" onClick={() => handleNavigation(link.to)}>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 