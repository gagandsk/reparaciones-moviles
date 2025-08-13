// src/components/LanguageSwitcher.tsx
import React from 'react';
import { Dropdown } from 'react-bootstrap';

const LanguageSwitcher: React.FC = () => {
  // Aquí irá la lógica para cambiar el idioma
  const handleLanguageChange = (lang: string) => {
    console.log(`Cambiando a idioma: ${lang}`);
    // En un proyecto real, aquí guardaríamos la preferencia de idioma en un estado o contexto
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="bg-white text-dark border-secondary">
        <i className="bi bi-translate"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleLanguageChange('es')}>Español (ES)</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('en')}>English (EN)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;