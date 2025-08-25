// src/components/Services.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="services" className="py-5 bg-light-custom">
      <Container>
        <h2 className="text-center fw-bold mb-5">{translations.servicesTitle}</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {translations.servicesList.map((service, index) => (
            <Col key={index}>
              <Card className="h-100 text-center p-4 shadow-sm border-0 rounded-3 service-card">
                <div className="service-icon-container">
                  <i className={`bi ${service.icon} fs-1 text-primary-custom`}></i>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;