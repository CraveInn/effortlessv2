import React from 'react';
import './ThreeColumnSection.css';
import { SiGooglesheets } from 'react-icons/si';
import storyboardImage from '../../../Assets/storyboard.png';
import storyboardImage2 from '../../../Assets/storyboard2.png';

const ThreeColumnSection = () => {
  return (
    <section className="three-column-section">
      <div className="column-container">
        {/* Left Column */}
        <div className="column left-column">
          <div className="image-container">
            <img src={storyboardImage} alt="Storyboard" className="storyboard-image" />
          </div>
        </div>

        {/* Middle Column */}
        <div className="column middle-column">
          <div className="cta-container">
            <SiGooglesheets className="google-sheet-icon" />
          </div>
        </div>

        {/* Right Column */}
        <div className="column right-column">
          <div className="image-container">
            <img src={storyboardImage2} alt="Storyboard" className="storyboard-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection; 