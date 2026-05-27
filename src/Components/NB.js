import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from '../IMG/logo.jpg';

function NB() {
  const history = useHistory();
  return (
    <>
      <Navbar expand="lg" className="custom-navbar sticky-top">
        <Container>
          <Navbar.Brand onClick={() => history.push("/")}>
            <img src={logo} alt="logo" className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => history.push("/")} href='/' className="nav-item active ">Home</Nav.Link>
              <Nav.Link onClick={() => history.push("/about")} href='/about' className="nav-item active ">About</Nav.Link>
              <Nav.Link onClick={() => history.push("/Services")} href='/Services'   className="nav-item active ">Services</Nav.Link>
              <Nav.Link onClick={() => history.push("/Technologylanguage")} href='/Technologylanguage' className="nav-item active ">T & L</Nav.Link>
              <Nav.Link onClick={() => history.push("/Careers")} href='/Careers' className="nav-item active ">Careers</Nav.Link>
              <Nav.Link onClick={() => history.push("/Contect")} href='/Contect' className="nav-item active ">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NB;