import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link corretamente

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarMain() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/netflix">Netflix</Nav.Link>
            <Nav.Link as={Link} to="/primevideo">Prime Video</Nav.Link>
            <Nav.Link as={Link} to="/hbomax">HBO Max</Nav.Link>
            <Nav.Link as={Link} to="/appletv">Apple TV+</Nav.Link>
           
          </Nav>
          <div>Social media  </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
