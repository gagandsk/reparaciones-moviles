import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import aboutUsImage from '../assets/fast-fix.jpg';
import FastFixHero from '../components/FastFixHero';

const AboutUs: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="about-us" className="py-5 bg-white">
      <Container>
        <Row className="d-flex align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="display-4 fw-bold mb-3 text-dark-custom">{translations.aboutUsTitle}</h2>
            <p className="fs-5 text-secondary-custom">{translations.aboutUsParagraph1}</p>
            <p className="fs-5 text-secondary-custom">{translations.aboutUsParagraph2}</p>
          </Col>
          <Col lg={6}>
            <Image 
              src={aboutUsImage} 
              alt="Imagen" 
              fluid 
              rounded
              className="shadow-lg"
            />
          </Col>
        </Row>
        <div className="py-5 bg-light-custom">
          <Container>
            <h3 className="text-center fw-bold mb-5">{translations.ourValuesTitle}</h3>
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
      </Container>

      <FastFixHero />
      
    </section>
  );
};

export default AboutUs;