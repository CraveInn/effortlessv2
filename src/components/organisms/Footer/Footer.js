import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <Link to="/terms">Terms & Conditions</Link>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-right">
        <p>© 2024 Effortless. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 