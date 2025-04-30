import React from 'react';
import './GoogleSheetAnimation.css';

const GoogleSheetAnimation = () => {
  return (
    <div className="sheet-container">
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sheet-svg"
      >
        {/* Sheet Header */}
        <rect x="50" y="20" width="300" height="40" fill="#f1f3f4" rx="4" />
        <rect x="60" y="30" width="20" height="20" fill="#15a362" rx="2" />
        <text x="90" y="45" fill="#444" fontSize="14">Untitled spreadsheet</text>

        {/* Sheet Toolbar */}
        <rect x="50" y="60" width="300" height="30" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />
        
        {/* Column Headers */}
        <rect x="50" y="90" width="50" height="30" fill="#f1f3f4" stroke="#e0e0e0" strokeWidth="1" />
        <rect x="100" y="90" width="100" height="30" fill="#f1f3f4" stroke="#e0e0e0" strokeWidth="1" />
        <rect x="200" y="90" width="100" height="30" fill="#f1f3f4" stroke="#e0e0e0" strokeWidth="1" />
        <text x="65" y="110" fill="#444" fontSize="12">A</text>
        <text x="140" y="110" fill="#444" fontSize="12">B</text>
        <text x="240" y="110" fill="#444" fontSize="12">C</text>

        {/* Row Headers and Cells */}
        <rect x="50" y="120" width="50" height="30" fill="#f1f3f4" stroke="#e0e0e0" strokeWidth="1" />
        <rect x="100" y="120" width="100" height="30" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />
        <rect x="200" y="120" width="100" height="30" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />
        <text x="65" y="140" fill="#444" fontSize="12">1</text>

        <rect x="50" y="150" width="50" height="30" fill="#f1f3f4" stroke="#e0e0e0" strokeWidth="1" />
        <rect x="100" y="150" width="100" height="30" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />
        <rect x="200" y="150" width="100" height="30" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />
        <text x="65" y="170" fill="#444" fontSize="12">2</text>

        <rect x="50" y="180" width="50" height="30" fill="#f1f3f4" stroke="#e0e0e0" strokeWidth="1" />
        <rect x="100" y="180" width="100" height="30" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />
        <rect x="200" y="180" width="100" height="30" fill="#ffffff" stroke="#e0e0e0" strokeWidth="1" />
        <text x="65" y="200" fill="#444" fontSize="12">3</text>

        {/* Active Cell Highlight */}
        <rect 
          x="100" 
          y="120" 
          width="100" 
          height="30" 
          className="active-cell" 
          fill="none" 
          stroke="#1a73e8" 
          strokeWidth="2" 
        />

        {/* Typing Animation */}
        <text x="110" y="140" fill="#000" fontSize="14" className="typing-text">
          <tspan className="cursor">|</tspan>
          <tspan className="typed-text">Hello World!</tspan>
        </text>

        {/* Cell Selection Handle */}
        <rect 
          x="190" 
          y="140" 
          width="10" 
          height="10" 
          fill="#1a73e8" 
          className="cell-handle"
        />
      </svg>
    </div>
  );
};

export default GoogleSheetAnimation; 