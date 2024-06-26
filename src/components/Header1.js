import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header1 = () => {
  return (
    <header>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="text-black"> Akash <i class="bi bi-check2-circle"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="touch">Home</Nav.Link>
            <Nav.Link href="#About" className="touch">About</Nav.Link>
            <Nav.Link href="#Projects" className="touch">Projects</Nav.Link>
            <Nav.Link href="#Resume" className="touch">Resume</Nav.Link>
            <Nav.Link href="#Contact" className="touch">Contact</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
  );
}

export default Header1