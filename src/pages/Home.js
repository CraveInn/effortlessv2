import React from 'react';
import './Home.css';
import Navbar from '../components/organisms/Navbar/Navbar';
import Hero from '../components/organisms/Hero/Hero';
import Features from '../components/organisms/Features/Features';
import ProStocks from '../components/organisms/ProStocks/ProStocks';
import Highlights from '../components/organisms/Highlights/Highlights';
import HowItWorks from '../components/organisms/HowItWorks/HowItWorks';
import Pricing from '../components/organisms/Pricing/Pricing';
import Reviews from '../components/organisms/Reviews/Reviews';
import Contact from '../components/organisms/Contact/Contact';
import Footer from '../components/organisms/Footer/Footer';
import Scene1Sheet from '../components/organisms/Scenes/Scene1Sheet';
import Scene2Website from '../components/organisms/Scenes/Scene2Website';
import Scene3Tagline from '../components/organisms/Scenes/Scene3Tagline';
import Integrations from '../components/organisms/Integrations/Integrations';
import ThreeColumnSection from '../components/organisms/ThreeColumnSection/ThreeColumnSection';
import Achievements from '../components/organisms/Achievements/Achievements';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <ThreeColumnSection />
      <HowItWorks />
      {/* <Integrations /> */}
      <Features />
      <ProStocks />
      <Achievements />
      
      {/* <Highlights /> */}
      
      
      {/* <div id="animated-demo-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, margin: '48px 0' }}>
        <Scene1Sheet />
        <Scene2Website />
        <Scene3Tagline />
      </div> */}
      <Pricing />
      <Reviews />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home; 