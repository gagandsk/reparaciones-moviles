import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from "./LanguageSwitcher";
import { useNavigate } from 'react-router-dom';
import { handleNavigation, useScrollOnNavigation } from '../utils/navigation-utils';

const Footer: React.FC = () => {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();
  useScrollOnNavigation();
  return (
    <footer className="bg-dark-custom text-white py-5">
      <Container>
        <Row className="g-4">
          <Col md={3}>
            <div className="mb-4">
              <h4 className="fw-bold fs-4" style={{ color: "#F7E741"}}>{translations.brand}</h4>
            </div>
            <h6 className="fw-bold mb-3">{translations.hoursTitle}</h6>
            <p className="text-white-50 mb-1">{translations.mondaySaturdayMorning}</p>
            <p className="text-white-50 mb-4">{translations.mondaySaturdayAfternoon}</p>
            <div className="d-flex gap-3">
              {/* 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4 hover-effect">
                <i className="bi bi-twitter-x"></i>
              </a>
              */}
              <a href="https://www.instagram.com/accessstore.es?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white fs-4 hover-effect">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>{translations.quickLinksTitle}</h6>
            <ListGroup variant="flush">
              {translations.quickLinks.map((item, index) => (
                <ListGroup.Item key={index} className="bg-transparent text-white p-0 py-2 border-0">
                  <a
                    onClick={(e) => { e.preventDefault(); handleNavigation(item.href, navigate); }}
                    className="text-white-50 text-decoration-none"
                  >
                    {item.text}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>{translations.repairServicesTitle}</h6>
            <ListGroup variant="flush">
              {translations.repairServices.map((item, index) => (
                <ListGroup.Item key={index} className="bg-transparent text-white p-0 py-2 border-0">
                  <a
                    onClick={(e) => { e.preventDefault(); handleNavigation(item.href, navigate); }}
                    className="text-white-50 text-decoration-none"
                  >
                    {item.text}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>{translations.informationTitle}</h6>
            <ListGroup variant="flush">
              {translations.information.map((item, index) => (
                <ListGroup.Item key={index} className="bg-transparent text-white p-0 py-2 border-0">
                  <a
                    onClick={(e) => { e.preventDefault(); handleNavigation(item.href, navigate); }}
                    className="text-white-50 text-decoration-none"
                  >
                    {item.text}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <hr className="border-secondary my-5" />
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <p className="text-white-50 mb-3"> <b>{translations.brand} © {currentYear}</b>. All Rights Reserved.</p>
            <LanguageSwitcher />
          </Col>
          
          <Col xs={12} md={6} className="text-center text-md-end mt-3 mt-md-0">
            <a
              onClick={(e) => { e.preventDefault(); handleNavigation('#top', navigate); }}
              className="text-white-50 hover-effect"
            >
              <i className="bi bi-arrow-up"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;