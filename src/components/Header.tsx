// src/components/Header.tsx
import React, { useState, useCallback, useEffect } from "react";
import { Navbar, Nav, Container, NavItem, Image, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  // Lógica para el scroll a secciones de la misma página o de otras
  const handleScrollToSection = useCallback((targetId: string, path: string = '/') => {
    setExpanded(false); // Cierra el menú en móviles

    // Si ya estamos en la ruta, hacemos scroll
    if (window.location.pathname === path) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, primero navegamos y luego hacemos scroll
      navigate(path, { state: { scrollTo: targetId } });
    }
  }, [navigate]);

  useEffect(() => {
    // Si la página se carga con un estado de scroll, lo ejecuta
    const state = (navigate as any).state;
    if (state && state.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [navigate]);

  return (
    <header>
      <Navbar
        expand="lg"
        className="shadow-sm fixed-top bg-dark-custom"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={() => setExpanded(false)}>
            <Image
              src={logo}
              alt="Fixtteam Logo"
              className="logo-header me-2"
              width={40}
              height={40}
            />
            <span className="text-primary-custom fw-bold fs-4">AccesStore</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto align-items-lg-center">
              {/* Dropdown de Servicios (con clase para hover) */}
              <NavDropdown
                title={translations.services || "Servicios"}
                id="services-dropdown"
                className="text-white dropdown-hover" // <-- Añade esta clase
              >
                <NavDropdown.Item onClick={() => handleScrollToSection('budgetCalc')}>
                  {translations.budgetCalculator}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faq" onClick={() => setExpanded(false)}>
                  {translations.faq}
                </NavDropdown.Item>
              </NavDropdown>

              {/* Dropdown de About Us con sub-dropdown (con clase para hover) */}
              <NavDropdown
                title={translations.aboutUs || "About us"}
                id="about-us-dropdown"
                className="text-white dropdown-hover" // <-- Añade esta clase
              >
                <NavDropdown.Item as={Link} to="/about" onClick={() => setExpanded(false)}>
                  {translations.aboutUs}
                </NavDropdown.Item>

                <NavDropdown
                  title={translations.businessRepairs || "Reparaciones para empresa"}
                  id="business-repairs-dropdown"
                  drop="end"
                  className="dropdown-hover" // <-- Añade esta clase
                >
                  <NavDropdown.Item onClick={() => handleScrollToSection('contact', '/')}>
                    {translations.contact}
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </Nav>

            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as={Link} to="/reparar-dispositivo" className="text-white" onClick={() => setExpanded(false)}>
                {translations.repairDevice || "Reparar mi dispositivo"}
              </Nav.Link>
              <Nav.Link
                href={`tel:${translations.contactPhone}`}
                className="text-white"
                aria-label={`Call us at ${translations.contactPhone}`}
              >
                {translations.contactPhone}
              </Nav.Link>
              <NavItem className="mt-2 mt-lg-0">
                <LanguageSwitcher />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;