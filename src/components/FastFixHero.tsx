// src/components/FastFixHero.tsx
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import fastFixImage from '../assets/fast-fix.jpg'

const FastFixHero: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="fast-fix-hero" className="bg-dark-custom text-white">
      <Row className="g-0 d-flex align-items-center">
        <Col lg={6} className="p-5 text-center text-lg-start">
          <h2 className="display-4 fw-bold mb-3">{translations.fastFixHeroTitle}</h2>
          <p className="fs-5 text-light-custom">{translations.fastFixHeroDescription}</p>
        </Col>
        <Col lg={6}>
          <Image 
            src={fastFixImage} 
            alt="Reparación rápida" 
            fluid 
            className="w-100" 
            style={{ minHeight: '300px', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </section>
  );
};

export default FastFixHero;