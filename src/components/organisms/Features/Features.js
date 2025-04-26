import React from 'react';
import './Features.css';
import { featuresConfig } from '../../../config/featuresConfig';

const Features = () => (
  <section className="features-section" id="features">
    <h2>Why Choose Our Sheet-Powered Websites?</h2>
    <div className="features-grid">
      {featuresConfig.map((feature, idx) => (
        <div className={`feature-card feature-${feature.color}`} key={idx} style={{ color: feature.textColor }}>
          <div className="feature-label">{feature.label}</div>
          <h3 style={{ color: feature.textColor }}>{feature.title}</h3>
          <p>{feature.description}</p>
          <div className="feature-bottom">
            <div>
              <div className="feature-meta">{feature.meta}</div>
              <div className="feature-value">{feature.value}</div>
            </div>
            <button className="feature-arrow-btn" aria-label={feature.button}>
              <span>&#8594;</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features; 