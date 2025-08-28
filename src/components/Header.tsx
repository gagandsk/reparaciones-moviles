import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from './LanguageSwitcher';
import { useNavigate } from 'react-router-dom';
import { handleNavigation, useScrollOnNavigation } from '../utils/navigation-utils';

type DropdownKeys = 'services' | 'about';

const Header = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ services: false, about: false });

  useScrollOnNavigation();

  const isDesktop = () => window.innerWidth >= 992;

  const handleMouseEnter = (dropdown: DropdownKeys) => {
    if (isDesktop()) {
      setDropdownOpen((prev) => ({ ...prev, [dropdown]: true }));
    }
  };

  const handleMouseLeave = (dropdown: DropdownKeys) => {
    if (isDesktop()) {
      setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
    }
  };

  const handleDropdownClick = (dropdown: DropdownKeys) => {
    if (!isDesktop()) {
      setDropdownOpen((prev) => ({ 
        ...prev, 
        [dropdown]: !prev[dropdown] 
      }));
    }
  };

  const closeAllDropdowns = () => {
    setDropdownOpen({ services: false, about: false });
  };

  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top bg-dark-custom py-2"
      expanded={expanded}
      onToggle={() => {
        setExpanded(!expanded);
        if (!expanded) {
          closeAllDropdowns();
        }
      }}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="d-lg-block p-2"
        >
        
          <span className="fw-bold fs-5" style={{ color: "#F7E741" }}>
            {translations.brand}
          </span>
          

          
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={{ zIndex: 1051 }}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-lg-center">
            <NavDropdown
              show={dropdownOpen.services}
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={() => handleMouseLeave('services')}
              onToggle={() => handleDropdownClick('services')}
              title={translations.servicesTitle}
              id="basic-nav-dropdown-services"
              className="medium-gray custom-dropdown"
            >
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavigation('#budget-calc', navigate); 
                  setExpanded(false);
                  closeAllDropdowns();
                }}
              >
                {translations.budget_calculator}
              </NavDropdown.Item>
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavigation('#services', navigate); 
                  setExpanded(false);
                  closeAllDropdowns();
                }}
              >
                {translations.servicesTitle}
              </NavDropdown.Item>
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavigation('/faq', navigate); 
                  setExpanded(false);
                  closeAllDropdowns();
                }}
              >
                {translations.faqTitle}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              show={dropdownOpen.about}
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={() => handleMouseLeave('about')}
              onToggle={() => handleDropdownClick('about')}
              title={translations.aboutUs}
              id="basic-nav-dropdown-about"
              className="medium-gray custom-dropdown"
            >
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavigation('/about', navigate); 
                  setExpanded(false);
                  closeAllDropdowns();
                }}
              >
                {translations.aboutUsTitle}
              </NavDropdown.Item>
              <NavDropdown.Item
                className="medium-gray custom-dropdown-item"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavigation('/business', navigate); 
                  setExpanded(false);
                  closeAllDropdowns();
                }}
              >
                {translations.business}
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link
              className="medium-gray custom-nav-link"
              style={{marginLeft: "1.5vh"}}
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavigation('/business', navigate); 
                setExpanded(false);
                closeAllDropdowns();
              }}
            >
              {translations.contact}
            </Nav.Link>
          </Nav>

          
          <hr className="custom-border-menu border-secondary"/>
          
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              className="medium-gray custom-nav-link custom-repair-device-btn-device"
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavigation('#budget-calc', navigate); 
                setExpanded(false);
                closeAllDropdowns();
              }}
            >
              {translations.repairDevice}
            </Nav.Link>
            <Nav.Link
              href={`tel:${translations.contactPhone}`}
              className="text-white custom-nav-link px-3"
              aria-label={`Call us at ${translations.contactPhone}`}
              onClick={() => {
                setExpanded(false);
                closeAllDropdowns();
              }}
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