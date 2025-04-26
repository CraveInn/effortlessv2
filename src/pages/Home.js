import React from 'react';
import './Home.css';
import Navbar from '../components/organisms/Navbar/Navbar';
import Hero from '../components/organisms/Hero/Hero';
import Features from '../components/organisms/Features/Features';
import Highlights from '../components/organisms/Highlights/Highlights';
import HowItWorks from '../components/organisms/HowItWorks/HowItWorks';
import Pricing from '../components/organisms/Pricing/Pricing';
import Reviews from '../components/organisms/Reviews/Reviews';
import Contact from '../components/organisms/Contact/Contact';
import Footer from '../components/organisms/Footer/Footer';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Features />
      <Highlights />
      <HowItWorks />
      <Pricing />
      <Reviews />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
}

export default Home; 