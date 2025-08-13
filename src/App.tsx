// src/App.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        {/* Aquí irá el resto del contenido de la página */}
        <h1 className="mt-5">¡Bienvenido a FixTeam!</h1>
      </Container>
    </>
  );
}

export default App;