import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sticker from './Sticker';

function NavbarMain() {
  return (
    <Navbar expand="lg" className='navbar '>
      <Container>
        <Navbar.Brand href="#" className='navbrand'>Leandro Hosken</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon">
            <i className="bi bi-list"></i>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className='navlink'>Home</Nav.Link>
            <Nav.Link as={Link} to="/netflix" className='navlink'>Netflix</Nav.Link>
            <Nav.Link as={Link} to="/primevideo" className='navlink'>Prime Video</Nav.Link>
            <Nav.Link as={Link} to="/hbomax" className='navlink'>HBO Max</Nav.Link>
            <Nav.Link as={Link} to="/appletv" className='navlink'>Apple TV+</Nav.Link>
            <Nav.Link as={Link} to="/sobre" className='navlink'>Sobre</Nav.Link>
          </Nav>
          <Sticker/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
