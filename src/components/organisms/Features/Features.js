import React from 'react';
import './Features.css';
import { featuresConfig } from '../../../config/featuresConfig';
import { BsCheckCircleFill } from 'react-icons/bs';

const Features = () => (
  <section className="features-section" id="features">
    <h2>Why Choose Our Sheet-Powered Websites?</h2>
    <div className="features-grid">
      {featuresConfig.map((feature, idx) => (
        <div className={`feature-card feature-${feature.color}`} key={idx} style={{ color: feature.textColor }}>
          <div className="feature-label">{feature.label}</div>
          <h3 style={{ color: feature.textColor }}>{feature.title}</h3>
          <ul className="feature-list">
            {feature.description.split('. ').filter(point => point.length > 0).map((point, index) => (
              <li key={index}>
                <BsCheckCircleFill className="check-icon" style={{ color: feature.textColor }}/>
                <span>{point.endsWith('.') ? point.slice(0, -1) : point}</span>
              </li>
            ))}
          </ul>
          {/* <div className="feature-bottom">
            <div>
              <div className="feature-meta">{feature.meta}</div>
              <div className="feature-value">{feature.value}</div>
            </div>
            <button className="feature-arrow-btn" aria-label={feature.button}>
              <span>&#8594;</span>
            </button>
          </div> */}
        </div>
      ))}
    </div>
  </section>
);

export default Features; 