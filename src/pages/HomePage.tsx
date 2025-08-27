// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Hero';
import BudgetForm from '../components/BudgetForm';
import FastFixHero from '../components/FastFixHero';
import MapSection from '../components/MapSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonial';
import RepairImage from '../assets/mobile-repair1.jpg';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FastFixHero image={RepairImage} />
      <Services />
      <Testimonials />
      <MapSection />
      <BudgetForm />
    </>
  );
};

export default HomePage;