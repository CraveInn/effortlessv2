import React, { useState } from 'react';
import './Pricing.css';
import ProjectModal from '../../molecules/ProjectModal/ProjectModal';

const plans = [
  {
    name: 'Personal Pack',
    price: 7999,
    features: [
      'Basic Website Setup (5-7 sections)',
      'Sheet Integration for Website Content'
    ],
    button: 'Request Callback',
    highlight: false,
    bg: '#f7f8fa',
    color: '#222',
  },
  {
    name: 'Startup Pack',
    price: 35999,
    features: [
  "Basic Website Setup (5-7 sections)",
  "Sheet Integration for Website Content",
  "SEO Optimization (metadata, OG tags)",
  "Custom Logo and Brand Palatte",
  "Custom Design (Tailored UI/UX)",
  "Social Media Post 15 post",
  "Meta Ads / month 1 week ad"
],
    button: 'Request Callback',
    highlight: false,
    bg: '#e6f0f3',
    color: '#222',
  },
  {
    name: 'Enterprise Pack',
    price: 49999,
    features: [
  "Basic Website Setup (5-7 sections)",
  "Sheet Integration for Website Content",
  "SEO Optimization (metadata, OG tags)",
  "Custom Logo and Brand Palatte",
  "Custom Design (Tailored UI/UX)",
  "E-commerce Product Showcase (from Sheet)",
  "Payment Integration (via Stripe/PayU)",
  "Website Traffic Analysis",
  "Custom Domain",
  "Social Media Post 15 post",
  "Meta Ads / month. 1 week ad",
  "Targeted Ads/ client. 1 week ad"
],
    button: 'Request Callback',
    highlight: false,
    bg: '#18151c',
    color: '#fff',
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="pricing-section-modern" id="pricing">
      <h2 className="pricing-title">Our Packages</h2>
      <p className="pricing-desc">Customized packages based on your needs</p>
      {/* <div className="pricing-toggle-row">
        <span className={!annual ? 'toggle-label active' : 'toggle-label'}>Bill Monthly</span>
        <div className="toggle-switch" onClick={() => setAnnual(a => !a)}>
          <div className={annual ? 'toggle-knob annual' : 'toggle-knob'}></div>
        </div>
        <span className={annual ? 'toggle-label active' : 'toggle-label'}>Bill Annually <span className="toggle-discount">(10% off)</span></span>
      </div> */}
      <div className="pricing-cards-modern">
        {plans.map((plan, idx) => (
          <div
            className={plan.highlight ? 'pricing-card-modern highlight' : 'pricing-card-modern'}
            key={plan.name}
            style={{ background: plan.bg, color: plan.color }}
          >
            <div className="plan-icon" aria-hidden>{plan.icon}</div>
            <div className="plan-name">{plan.name}</div>
            {/* <div className="plan-price">
              ${annual ? (plan.price * 12 * 0.9).toLocaleString() : plan.price.toLocaleString()}
              <span className="plan-price-unit">/mo</span>
            </div> */}
            <ul className="plan-features">
              {plan.features.map((f, i) => (
                <li key={i}><span className="feature-check">✔</span> {f}</li>
              ))}
            </ul>
            <button className="plan-btn" onClick={() => setIsModalOpen(true)}>{plan.button}</button>
          </div>
        ))}
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Pricing; 