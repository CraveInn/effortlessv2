// Scene3Tagline.js
import React, { useEffect, useState } from 'react';

export default function Scene3Tagline() {
  const [show, setShow] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 400);
    const t2 = setTimeout(() => setShowLogo(true), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{
      width: 340,
      height: 160,
      background: '#fff',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div
        style={{
          opacity: show ? 1 : 0,
          transition: 'opacity 1s',
          fontSize: 20,
          color: '#222',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 16,
        }}
      >
        Control your website.<br />
        The Google Sheets way. 🧩✨
      </div>
      <div
        style={{
          opacity: showLogo ? 1 : 0,
          transition: 'opacity 1s',
          fontSize: 28,
          color: '#7BAAF7',
          fontWeight: 900,
          letterSpacing: 2,
          fontFamily: 'Inter, Arial',
        }}
      >
        Puzzles
      </div>
    </div>
  );
}
