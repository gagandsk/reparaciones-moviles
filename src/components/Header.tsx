// src/components/Header.tsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header>
      {/* Top Bar - Información de Contacto */}
      <div className="bg-primary-custom text-white py-2 d-none d-lg-block">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="bi bi-geo-alt me-2"></i>
            <span>Av. de la Libertad 123, Ciudad</span>
          </div>
          <div>
            <i className="bi bi-telephone me-2"></i>
            <span>+34 123 456 789</span>
          </div>
        </Container>
      </div>

      {/* Navbar Principal */}
      <Navbar expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <span className="text-primary-custom fw-bold fs-4">FixTeam</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#compramos">Compramos Dispositivos</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
              <Button variant="outline-success" className="btn-secondary-custom ms-lg-3">
                Obtén tu Cotización
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;