import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements-section" id="highlights">
      <div className="achievements-container">
        <div className="achievements-title">
          <h2>Effortless<br />at a Glance</h2>
        </div>
        <div className="metrics-grid">
          <div className="metric-card light-blue">
            <div className="metric-value">2K</div>
            <div className="metric-label">Total Members</div>
          </div>
          <div className="metric-card black">
            <div className="metric-value">500</div>
            <div className="metric-label">Brand Served</div>
          </div>
          <div className="metric-card yellow">
            <div className="metric-value">100%</div>
            <div className="metric-label">Satisfaction Rate</div>
          </div>
          <div className="metric-card purple">
            <div className="metric-value">96%</div>
            <div className="metric-label">Return Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 