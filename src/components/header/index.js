import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Style from './header.module.scss';
import './../../assets/scss/styles.scss';
const Header = () => {
  return (
    <header>
      <Navbar
        bg="white"
        expand="lg"
        fixed="top"
        className={`px-0 ${Style.customNavbar}`}
      >
        <Container>
          <Navbar.Brand href="/" className={Style.navBrand}>
            Coding Lover
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
