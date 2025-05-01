import React, { useEffect } from 'react';
import './Home.css';
import Navbar from '../components/organisms/Navbar/Navbar';
import Hero from '../components/organisms/Hero/Hero';
import Features from '../components/organisms/Features/Features';
import ProStocks from '../components/organisms/ProStocks/ProStocks';
import HowItWorks from '../components/organisms/HowItWorks/HowItWorks';
import Pricing from '../components/organisms/Pricing/Pricing';
import Reviews from '../components/organisms/Reviews/Reviews';
import Footer from '../components/organisms/Footer/Footer';
import ThreeColumnSection from '../components/organisms/ThreeColumnSection/ThreeColumnSection';
import Achievements from '../components/organisms/Achievements/Achievements';
import logEvent from '../components/organisms/Logging/Logging';

function Home() {

  useEffect(() => {
    logEvent(null, 'page_visit');
  }, []);

  return (
    <div className="home">
      {/* <Logging /> */}
      <Navbar />
      <Hero />
      <ThreeColumnSection />
      <HowItWorks />
      <Features />
      <ProStocks />
      <Achievements />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home; 