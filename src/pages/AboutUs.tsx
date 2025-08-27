import React, { useState, useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
import img4 from "../assets/mobile-repair1.jpg";
import img2 from "../assets/mobile-repair2.jpg";
import img3 from "../assets/mobile-repair3.jpg";
import img1 from "../assets/business.jpg";
import Local from "../assets/local-1.png";

const AboutUs: React.FC = () => {
  const { translations } = useLanguage();
  const rotatingTitles = [
    "We Fix Phones, Tablets And Gadgets",
    "We Repair Devices Fast",
    "Expert Tech Solutions",
  ];

  const backgroundImages = [img1, img2, img3, img4];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isBgVisible, setIsBgVisible] = useState(false);

  useEffect(() => {
    // Fade in the initial background
    const fadeInTimeout = setTimeout(() => setIsBgVisible(true), 500);

    const bgInterval = setInterval(() => {
      setIsBgVisible(false); // Fade out current image
      setTimeout(() => {
        setCurrentBgIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
        setIsBgVisible(true); // Fade in new image
      }, 1000); // Delay to match animation duration
    }, 7000); // Increased interval for smoother transition

    return () => {
      clearTimeout(fadeInTimeout);
      clearInterval(bgInterval);
    };
  }, [rotatingTitles.length, backgroundImages.length]);

  return (
    <section
      id="about-us"
      className="py-5 bg-white"
      style={{ marginTop: "100px" }}
    >
      <Container>
        <Row className="d-flex align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4 text-dark section-title" style={{ fontSize: '2.5rem', letterSpacing: '1px' }}>
              {translations.aboutUsTitle}
            </h2>
            <p className="fs-5 text-secondary-custom lh-lg" style={{ lineHeight: '1.8', fontWeight: '400' }}>
              {translations.aboutUsParagraph1}
            </p>
            <p className="fs-5 text-secondary-custom lh-lg" style={{ lineHeight: '1.8', fontWeight: '400' }}>
              {translations.aboutUsParagraph2}
            </p>
          </Col>
          <Col lg={6}>
            <Image
              src={Local}
              alt="Imagen"
              fluid
              rounded
              className="shadow-lg"
            />
          </Col>
        </Row>
      </Container>

      <div className="hero-section position-relative text-dark text-start">
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
            opacity: isBgVisible ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        ></div>
        <div className="hero-overlay-custom"></div>
        <Container className="hero-container-custom position-relative">
          <div className="hero-content">
            <h1
              className="hero-title"
              style={{ transition: "opacity 1s ease-in-out" }}
            >
              {translations.businessRepairsTitle}
            </h1>
            <p className="hero-subtitle text-muted">
              {translations.businessRepairsText}
            </p>
          </div>
        </Container>
      </div>

      <div className="py-5 bg-light-custom">
        <Container>
          <h3 className="text-center fw-bold mb-5">
            {translations.ourValuesTitle}
          </h3>
          <Row className="g-4 text-center">
            <Col md={4}>
              <div className="p-4 rounded shadow h-100 value-card">
                <i className="bi bi-shield-check fs-1 text-primary-custom mb-3 d-block service-icon-container"></i>
                <h5 className="fw-bold">{translations.value1Title}</h5>
                <p>{translations.value1Text}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4 rounded shadow h-100 value-card">
                <i className="bi bi-speedometer fs-1 text-primary-custom mb-3 d-block service-icon-container"></i>
                <h5 className="fw-bold">{translations.value2Title}</h5>
                <p>{translations.value2Text}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4 rounded shadow h-100 value-card">
                <i className="bi bi-gear-wide-connected fs-1 text-primary-custom mb-3 d-block service-icon-container"></i>
                <h5 className="fw-bold">{translations.value3Title}</h5>
                <p>{translations.value3Text}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AboutUs;