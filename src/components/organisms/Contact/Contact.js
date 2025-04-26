import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact-section" id="contact">
    <h2>Ready to Launch? Let's Build It Together.</h2>
    <div className="contact-container">
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Tell us about your project"></textarea>
        <button type="submit" className="submit-btn">Book a Free Consultation</button>
      </form>
    </div>
  </section>
);

export default Contact; 