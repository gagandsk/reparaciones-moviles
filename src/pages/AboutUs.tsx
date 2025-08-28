import React, { useState, useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
import img4 from "../assets/mobile-repair1.jpg";
import img2 from "../assets/mobile-repair2.jpg";
import img3 from "../assets/mobile-repair3.jpg";
import img1 from "../assets/banner1.jpg";
import Local from "../assets/local-1.png";
import { useNavigate } from 'react-router-dom';
import { handleNavigation, useScrollOnNavigation } from '../utils/navigation-utils';

const AboutUs: React.FC = () => {
  const { translations } = useLanguage();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isBgVisible, setIsBgVisible] = useState(false);


  const navigate = useNavigate();
  useScrollOnNavigation();

  const backgroundImages = [img1, img2, img3, img4];

  // Background rotation effect
  useEffect(() => {
    const fadeInTimeout = setTimeout(() => setIsBgVisible(true), 500);

    const bgInterval = setInterval(() => {
      setIsBgVisible(false);
      setTimeout(() => {
        setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setIsBgVisible(true);
      }, 1000);
    }, 7000);

    return () => {
      clearTimeout(fadeInTimeout);
      clearInterval(bgInterval);
    };
  }, [backgroundImages.length]);

  return (
    <section id="about-us" className="py-3 bg-white" style={{ marginTop: "150px" }}>

      <Container>
        <Row className="d-flex align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content-wrapper">
              <h1 className="display-4 fw-bold mb-4 text-dark lh-tight section-title">
                {translations.aboutUsTitle}
              </h1>
              <p className="fs-5 text-muted lh-lg mb-4" style={{ fontWeight: '400' }}>
                {translations.aboutUsParagraph1}
              </p>
              <p className="fs-5 text-muted lh-lg mb-4" style={{ fontWeight: '400' }}>
                {translations.aboutUsParagraph2}
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <Image
                src={Local}
                alt="Nuestra ubicación y equipo profesional"
                fluid
                rounded
                className="shadow-lg"
                style={{ borderRadius: '20px' }}
              />
              {/* Floating badge */}
              <div
                className="position-absolute bg-white shadow-lg rounded-pill px-4 py-2"
                style={{
                  top: '20px',
                  right: '20px',
                  border: '3px solid #f8f9fa'
                }}
              >
                <span className="text-success fw-bold">✓ Certificados</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="hero-section position-relative text-white">
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
            opacity: isBgVisible ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div
          className="hero-overlay position-absolute w-100 h-100"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)'
          }}
        />
        <Container className="position-relative py-5">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="hero-content py-5">
                <h2 className="display-5 fw-bold mb-4" style={{ letterSpacing: '1px' }}>
                  {translations.businessRepairsTitle}
                </h2>
                <p className="fs-4 opacity-90 mb-4 lh-lg">
                  {translations.businessRepairsText}
                </p>
                <button
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    handleNavigation('/business', navigate); 
                  }}
                >
                  <i className="bi bi-arrow-right me-2"></i>
                  {translations.contact}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mt-2 mb-4">
                {translations.ourValuesTitle}
              </h2>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              {
                icon: "bi-shield-check",
                title: translations.value1Title,
                text: translations.value1Text,
                color: "warning"
              },
              {
                icon: "bi-lightning-charge",
                title: translations.value2Title,
                text: translations.value2Text,
                color: "warning"
              },
              {
                icon: "bi-gear-wide-connected",
                title: translations.value3Title,
                text: translations.value3Text,
                color: "warning"
              }
            ].map((value, index) => (
              <Col lg={4} md={6} key={index}>
                <div
                  className="value-card h-100 p-4 rounded-4 border-0 shadow-sm bg-white position-relative overflow-hidden"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                  }}
                >

                  <div
                    className={`position-absolute opacity-10 bg-${value.color}`}
                    style={{
                      top: '-20px',
                      right: '-20px',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%'
                    }}
                  />

                  <div className="text-center position-relative">
                    <div
                      className={`d-inline-flex align-items-center justify-content-center rounded-circle mb-4 bg-${value.color} bg-opacity-10`}
                      style={{ width: '80px', height: '80px' }}
                    >
                      <i className={`${value.icon} fs-1 text-${value.color}`}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{value.title}</h4>
                    <p className="text-muted lh-lg">{value.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>


    </section>
  );
};

export default AboutUs;