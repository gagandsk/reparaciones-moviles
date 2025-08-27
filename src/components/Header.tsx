import React from 'react';
import { Navbar, Nav, Container, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from './LanguageSwitcher';

import { useNavigate } from 'react-router-dom';
import { handleNavigation, useScrollOnNavigation } from '../utils/navigation-utils';

const Header = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  useScrollOnNavigation();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top bg-dark-custom py-3"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="fw-bold fs-4" style={{ color: "#F7E741" }}>{translations.brand}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-lg-center">
            <NavDropdown
              title={translations.servicesTitle}
              id="basic-nav-dropdown"
              className="medium-gray custom-dropdown"
            >
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { e.preventDefault(); handleNavigation('#budget-calc', navigate); setExpanded(false); }}
              >
                {translations.budget_calculator}
              </NavDropdown.Item>
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { e.preventDefault(); handleNavigation('#services', navigate); setExpanded(false); }}
              >
                {translations.servicesTitle}
              </NavDropdown.Item>
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { e.preventDefault(); handleNavigation('/faq', navigate); setExpanded(false); }}
              >
                {translations.faq.title}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={translations.aboutUs}
              id="basic-nav-dropdown"
              className="medium-gray custom-dropdown"
            >
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { e.preventDefault(); handleNavigation('/about', navigate); setExpanded(false); }}
              >
                {translations.aboutUsTitle}
              </NavDropdown.Item>
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { e.preventDefault(); handleNavigation('/business', navigate); setExpanded(false); }}
              >
                {translations.business}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="medium-gray custom-nav-link"
              onClick={(e) => { e.preventDefault(); handleNavigation('/business', navigate); setExpanded(false); }}
            >
              {translations.contact}
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              className="medium-gray custom-nav-link"
              onClick={(e) => { e.preventDefault(); handleNavigation('#budget-calc', navigate); setExpanded(false); }}
            >
              {translations.repairDevice}
            </Nav.Link>
            <Nav.Link
              href={`tel:${translations.contactPhone}`}
              className="text-white custom-nav-link"
              aria-label={`Call us at ${translations.contactPhone}`}
              onClick={() => setExpanded(false)}
            >
              <i
                className="bi bi-telephone-outbound fs-10"
                style={{ marginRight: "10px", color: "#F7E741" }}
              ></i>
              {translations.contactPhone}
            </Nav.Link>
            <NavItem className="mt-2 mt-lg-0">
              <LanguageSwitcher />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;