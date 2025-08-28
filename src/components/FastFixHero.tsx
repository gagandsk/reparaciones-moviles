import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

interface FastFixHeroProps {
  image: string;
}

const FastFixHero: React.FC<FastFixHeroProps> = ({ image }) => {
  const { translations } = useLanguage();

  return (
    <section 
      id="fast-fix-hero" 
      className="position-relative"
      style={{
        minHeight: '500px',
        background: `linear-gradient(to right, rgba(223, 223, 223, 1) 20%, rgba(0, 0, 0, 0) 70%), url(${image}) no-repeat right center / cover`
      }}
    >
      <Row className="g-0 h-100 align-items-center position-relative" style={{ zIndex: 2 }}>
        <Col lg={6} className="p-5 text-center text-lg-start">
          <h2 className="display-4 fw-bold mb-3 text-dark">
            {translations.fastFixHeroTitle || 'Our Repairs Mean Business.'}
          </h2>
          <div 
            className="mb-3" 
          ></div>
          <p className="fs-5 text-dark mb-4">
            {translations.fastFixHeroDescription || 'Broken and slow-performing devices can grind productivity down to a halt for big and small companies. FixTech can get business booming again.'}
          </p>
        </Col>
        <Col lg={6}></Col>
      </Row>
    </section>
  );
};

export default FastFixHero;
