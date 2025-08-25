import React from "react";
import { Container, Button } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
import heroBg from "../assets/hero-bg.jpg"; // Replace with your repair background image

const Hero: React.FC = () => {
  const { translations } = useLanguage();

  const heroContent = {
    title: translations.heroTitle || "We Are Experts At Cell Phone Repair!",
    subtitle: translations.heroSubtitle || "Did you drop or break your phone? Our highly trained technicians are ready to fix phones.",
    buttonText: translations.heroButtonText || "Repair My Device",
    buttonLink: translations.heroButtonLink || "/reparar-dispositivo",
  };

  return (
    <div className="hero-section text-dark text-start position-relative">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="hero-overlay"></div>
      <Container className="hero-container position-relative">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">{heroContent.title.split(" At ")[0]}</span>{" "}
            At {heroContent.title.split(" At ")[1]}
          </h1>
          <p className="hero-subtitle">{heroContent.subtitle}</p>
          <Button
            variant="primary"
            className="hero-button mt-4"
            href={heroContent.buttonLink}
          >
            {heroContent.buttonText}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;