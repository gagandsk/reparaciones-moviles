import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";
import img2 from '../assets/business1.jpg';
import img1 from '../assets/business2.jpg';
import img3 from '../assets/business.jpg';
import img4 from '../assets/mobile-repair1.jpg';
import Contact from "../components/Contact";

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
                setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
                setIsBgVisible(true); // Fade in new image
            }, 1000); // Delay to match animation duration
        }, 7000); // Increased interval for smoother transition

        return () => {
            clearTimeout(fadeInTimeout);
            
            clearInterval(bgInterval);
        };
    }, [rotatingTitles.length, backgroundImages.length]);

    return (
        <div>
            <div
                className="hero-section position-relative text-dark text-start"
            >
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
                        <p
                            className="hero-subtitle text-muted"
                        >
                            {translations.businessRepairsText}
                        </p>
                    </div>
                </Container>
            </div>

            <section id="why-us" className="py-5 bg-light-custom why-choose-us-section">
      <Container>
        {/* Título de sección */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 text-dark section-title">
            {translations.benefits_title}
          </h2>
        </div>

        {/* Grid de 3-4 columnas (desktop) / 1 columna (móvil) */}
        <Row xs={1} sm={2} lg={4} className="g-4 justify-content-center">
          {translations.benefits_list.map((item, index) => (
            <Col key={index}>
              <Card className="h-100 text-center p-4 shadow-sm border-0 rounded-3 service-card why-choose-card">
                {/* Icono representativo */}
                <div className="service-icon-container mb-3">
                  <div className="icon-wrapper">
                    <i className={`bi ${item.icon} fs-1 text-primary-custom`}></i>
                  </div>
                </div>
                
                <Card.Body className="p-0">
                  {/* Título corto */}
                  <Card.Title className="fw-bold mb-3 card-title">
                    {item.title}
                  </Card.Title>
                  
                  {/* Descripción breve (2-3 líneas) */}
                  <Card.Text className="text-muted card-description">
                    {item.description}
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

            <Contact />
        </div>

    );
};

export default AboutUs;