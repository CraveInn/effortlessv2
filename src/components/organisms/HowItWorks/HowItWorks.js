import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => (
  <section className="how-it-works" id="howitworks">
    <h2>How It Works?</h2>
    <div className="steps-horizontal">
      <div className="step-block">
        <div className="step-circle">1</div>
        <div className="step-title">We Design Your Website</div>
        <div className="step-desc">Based on your branding and needs, we build a beautiful, sheet-powered website.</div>
      </div>
      <div className="step-dots" aria-hidden="true"></div>
      <div className="step-block">
        <div className="step-circle">2</div>
        <div className="step-title">You Manage with a Sheet</div>
        <div className="step-desc">Titles, descriptions, images — everything editable through a simple Google Sheet.</div>
      </div>
      <div className="step-dots" aria-hidden="true"></div>
      <div className="step-block">
        <div className="step-circle">3</div>
        <div className="step-title">Live in Minutes</div>
        <div className="step-desc">Publish updates instantly without developer help. Save time and money.</div>
      </div>
    </div>
  </section>
);

export default HowItWorks; 