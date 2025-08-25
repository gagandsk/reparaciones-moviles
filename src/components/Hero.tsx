import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
import { Link } from 'react-router-dom';
import img1 from '../assets/about-1.png';
import img2 from '../assets/business.jpg';
import img3 from '../assets/tech.jpg';

const Hero: React.FC = () => {
  const { translations } = useLanguage();

  const heroContent = {
    title: translations.heroTitle || "We Fix Phones, Tablets And Gadgets",
    subtitle: translations.heroSubtitle || "Our name says it all! We fix it and we fix it fast. No matter what type of device it is, we will repair it for a fair price.",
    buttonText: translations.heroButtonText || "Repair My Device",
    buttonLink: translations.heroButtonLink || "/reparar-dispositivo",
  };

  const rotatingTitles = [
    "We Fix Phones, Tablets And Gadgets",
    "We Repair Devices Fast",
    "Expert Tech Solutions",
  ];

  const backgroundImages = [
    img1, img2, img3
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % rotatingTitles.length);
    }, 5000);

    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(bgInterval);
    };
  }, [rotatingTitles.length, backgroundImages.length]);

  return (
    <div
      className="hero-section position-relative text-dark text-start"
    >
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        }}
      ></div>
      <div className="hero-overlay-custom"></div>
      <Container className="hero-container-custom position-relative">
        <div className="hero-content">
          <h1
            className="hero-title"
            key={currentTitleIndex}
            style={{ transition: "opacity 1s ease-in-out" }}
          >
            <span
              className="highlight"
            >
              {rotatingTitles[currentTitleIndex].split(",")[0]}
            </span>
            {rotatingTitles[currentTitleIndex].split(",").slice(1).join(",")}
          </h1>
          <p
            className="hero-subtitle text-muted"
          >
            {heroContent.subtitle}
          </p>
          <Button
            as={Link}
            to={heroContent.buttonLink}
            variant="light"
            className="hero-button mt-4 rounded-pill px-4 py-2"
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            {heroContent.buttonText}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;