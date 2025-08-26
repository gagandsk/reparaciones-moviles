
import { Navbar, Nav, Container, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {

  const { translations } = useLanguage();

  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top bg-dark-custom py-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="fw-bold fs-4" style={{ color: "#F7E741"}}>{translations.brand}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-lg-center">

            <NavDropdown title="Servicios" id="basic-nav-dropdown" className="medium-gray">
              <NavDropdown.Item href="#budget-calc" className="medium-gray">{translations.budget_calculator}</NavDropdown.Item>
              <NavDropdown.Item href="#services" className="medium-gray">{translations.servicesTitle}</NavDropdown.Item>
              <NavDropdown.Item href="/faq" className="medium-gray">{translations.faq.title}</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About us" id="basic-nav-dropdown" className="medium-gray">
              <NavDropdown.Item href="/about" className="medium-gray">{translations.aboutUsTitle}</NavDropdown.Item>
              <NavDropdown.Item href="/business" className="medium-gray">Reparaciones con empresas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/business" className="medium-gray">Contact</Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="#budget-calc" className="medium-gray" onClick={() => setExpanded(false)}>
              {translations.repairDevice}
            </Nav.Link>
            <Nav.Link
              href={`tel:${translations.contactPhone}`}
              className="text-white"
              aria-label={`Call us at ${translations.contactPhone}`}
            >
              <i className="bi bi-telephone-outbound fs-10" style={{marginRight: "10px" , color: "#F7E741"}}></i>
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