import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext'; 

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="bg-dark text-white border-secondary">
        <i className="bi bi-globe"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className='bg-dark text-white'>
        <Dropdown.Item onClick={() => setLanguage('es')} active={language === 'es'} className='bg-dark text-white'>ES</Dropdown.Item>
        <Dropdown.Item onClick={() => setLanguage('en')} active={language === 'en'} className='bg-dark text-white'>EN</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
