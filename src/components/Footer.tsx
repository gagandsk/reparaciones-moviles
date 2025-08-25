// src/components/Footer.tsx
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from "./LanguageSwitcher";

const Footer: React.FC = () => {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-custom text-white py-5">
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className="mb-4 mb-md-0 d-flex flex-column justify-content-between">
            <div>
              <h4 className="text-white fw-bold fs-3">BRAND??</h4>
              <p className="mt-3 text-white-50">{translations.footerSlogan}</p>
            </div>
            <p className="mt-4 mt-md-0 text-white-50">
              © {currentYear} BRAND??. {translations.footerCopyright}
            </p>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-4">{translations.repairServicesTitle}</h5>
            <ListGroup variant="flush">
              {translations.repairServices.map((service, index) => (
                <ListGroup.Item key={index} className="bg-transparent text-white p-0 py-1 border-0">
                  <a href={service.href} className="text-white-50 text-decoration-none">{service.text}</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-4">{translations.informationTitle}</h5>
            <ListGroup variant="flush">
              {translations.information.map((info, index) => (
                <ListGroup.Item key={index} className="bg-transparent text-white p-0 py-1 border-0">
                  <a href={info.href} className="text-white-50 text-decoration-none">{info.text}</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold mb-4">{translations.hoursTitle}</h5>
            <p className="mb-1 text-white-50">{translations.mondaySaturdayMorning}</p>
            <p className="mb-0 text-white-50">{translations.mondaySaturdayAfternoon}</p>
            <div className="d-flex gap-3 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-media-icon text-white">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-media-icon text-white">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-media-icon text-white">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
          <Col md={2} className="mt-2 mb-md-0">
            <LanguageSwitcher />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;