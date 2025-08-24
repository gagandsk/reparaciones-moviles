// src/components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-custom text-white py-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5>Fixtteam</h5>
            <p className="text-muted">
              We can fix it almost any device you can think of. Get a free estimate today.
            </p>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Links</h5>
            <ul className="list-unstyled text-small">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled text-small">
              <li><a href="tel:+34123456789" className="text-white text-decoration-none">+34 123 456 789</a></li>
              <li><a href="mailto:info@fixtteam.com" className="text-white text-decoration-none">info@fixtteam.com</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Follow Us</h5>
            {/* Aquí puedes poner iconos de redes sociales */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;