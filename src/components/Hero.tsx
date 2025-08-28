import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
import img1 from '../assets/mobile-repair1.jpg';
import img2 from '../assets/mobile-repair2.jpg';
import img3 from '../assets/mobile-repair3.jpg';
import img4 from '../assets/mobile-repair4.jpg';

const Hero: React.FC = () => {
  const { translations } = useLanguage();

  const heroSlides = translations.heroSlides;

  const slideData = heroSlides.map((slide, index) => ({
    ...slide,
    background: [img1, img2, img3, img4][index % 4], // Cycle through background images
  }));

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => setIsVisible(true), 500);

    const slideInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideData.length);
        setIsVisible(true);
      }, 1000);
    }, 7000);

    return () => {
      clearTimeout(fadeInTimeout);
      clearInterval(slideInterval);
    };
  }, [slideData.length]);

  const currentSlide = slideData[currentSlideIndex];

  return (
    <div
      className="hero-section position-relative text-dark text-start mt-5"
      style={{ minHeight: '80vh' }}
    >
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${currentSlide.background})`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="hero-overlay-custom"></div>
      <Container className="hero-container-custom position-relative h-100 d-flex align-items-center">
        <div className="hero-content">
          <h3
            className="hero-title"
            style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease-in-out" }}
          >
            {currentSlide.title}
          </h3>
          <p
            className="hero-subtitle text-muted"
            style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease-in-out" }}
          >
            {currentSlide.subtitle}
          </p>
          <Button
            variant="primary"
            className="fw-bold hero-button mt-4 p-3"
            style={{ transition: "transform 0.3s ease-in-out", background: 'var(--yellow-bright)', borderColor: 'var(--yellow-bright)' }}
            href="#budget-calc"
          >
            {translations.repairMyDevice || "Repair My Device"}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;