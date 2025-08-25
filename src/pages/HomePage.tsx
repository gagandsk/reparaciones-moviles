// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import FastFixHero from '../components/FastFixHero';
import MapSection from '../components/MapSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonial';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FastFixHero />
      <Services />
      <MapSection />
      <Testimonials />
      <MapSection />
      <Contact />
    </>
  );
};

export default HomePage;