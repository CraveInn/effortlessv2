import React from 'react';
import './Highlights.css';

const categories = [
  'Basic Website Setup', 'Sheet Integration','Form integration with sheet', 'Social Media Post','Custom Logo',  'Custom Domain'
];

const Highlights = () => (
  <section className="highlights-section" >
    <div className="highlights-title"><h2 >Our Achievements</h2></div>
    <div>
    <div className="highlights-grid">
      {/* Left: Top Categories */}
      <div className="highlights-categories">
        <div className="highlights-label">
          <span className="dot" /> TOP CATEGORIES
        </div>
        <div className="categories-list">
          {categories.map((cat, i) => (
            <span className="category-pill" key={i}>{cat}</span>
          ))}
        </div>
      </div>
      {/* Right: User Count */}
      <div className="highlights-users">
        <div className="users-header">
          Join our community of<br />satisfied users
          <span className="arrow-btn" aria-label="Join">↗</span>
        </div>
        <div className="users-count">451+</div>
      </div>
      {/* Center: Visit Collection */}
      <div className="highlights-collection">
        <div className="collection-header">
          Visit Collection
          <span className="arrow-btn" aria-label="Visit Collection">↗</span>
        </div>
        <div className="collection-desc">
          OFFERING EXCEPTIONAL<br />QUALITY AFFORDABLE<br />PRICES VITALITY.
        </div>
      </div>
      </div>
      
     
    </div>
  </section>
);

export default Highlights; 