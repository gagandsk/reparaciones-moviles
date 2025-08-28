import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { translations } = useLanguage();
  const counters = useRef<{ value: number; target: number; element: HTMLHeadingElement | null }[]>([
    { value: 0, target: 15, element: null },
    { value: 0, target: 5000, element: null },
    { value: 0, target: 24, element: null },
    { value: 0, target: 100, element: null },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 2000;

        counters.current.forEach((counter, index) => {
          if (counter.element) {
            let start: number | null = null;
            const updateCount = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const currentValue = Math.floor(progress * counter.target);
              if (counter.element) {
                counter.element.textContent = `${currentValue}${index === 0 ? '+' : index === 1 ? '+' : index === 2 ? '/7' : '%'}`;
              }
              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            };
            requestAnimationFrame(updateCount);
          }
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    const trustItems = document.querySelectorAll('.trust-item h3');
    trustItems.forEach((item, index) => {
      counters.current[index].element = item as HTMLHeadingElement;
    });

    const trustSection = document.querySelector('.trust-indicators');
    if (trustSection) observer.observe(trustSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-5 bg-light-custom why-choose-us-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 text-dark section-title">
            {translations.whyChooseUsTitle}
          </h2>
          <p className="lead text-muted mb-4 section-description">
            {translations.whyChooseUsDescription}
          </p>
        </div>
        <Row xs={1} sm={2} lg={4} className="g-4 justify-content-center">
          {translations.whyChooseUsList.map((item, index) => (
            <Col key={index}>
              <Card className="h-100 text-center p-4 shadow-sm border-0 rounded-3 service-card why-choose-card">
                <div className="service-icon-container mb-3">
                  <div className="icon-wrapper">
                    <i className={`bi ${item.icon} fs-1 text-primary-custom`}></i>
                  </div>
                </div>
                
                <Card.Body className="p-0">
                  <Card.Title className="fw-bold mb-3 card-title">
                    {item.title}
                  </Card.Title>
                  
                  <Card.Text className="text-muted card-description">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-5 pt-4 border-top">
          <Col lg={12}>
            <div className="text-center trust-indicators">
              <Row xs={2} md={4} className="g-3">
                <Col>
                  <div className="trust-item">
                    <h3 className="fw-bold text-primary-custom mb-1"></h3>
                    <small className="text-muted">{translations.years_of_experience}</small>
                  </div>
                </Col>
                <Col>
                  <div className="trust-item">
                    <h3 className="fw-bold text-primary-custom mb-1"></h3>
                    <small className="text-muted">{translations.successful_repairs}</small>
                  </div>
                </Col>
                <Col>
                  <div className="trust-item">
                    <h3 className="fw-bold text-primary-custom mb-1"></h3>
                    <small className="text-muted">{translations.service_available}</small>
                  </div>
                </Col>
                <Col>
                  <div className="trust-item">
                    <h3 className="fw-bold text-primary-custom mb-1"></h3>
                    <small className="text-muted">{translations.warranty}</small>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;