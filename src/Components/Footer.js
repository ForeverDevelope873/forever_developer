import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <footer className="bg-dark text-light py-5 mt-1">
      <Container>
        <Row className="g-4 text-center text-md-start">
          {/* Address Section */}
          <Col lg={3} md={6}>
            <h5 data-aos="zoom-in" className="text-white mb-4">
              Address
            </h5>
            <p data-aos="zoom-in">
              <FaMapMarkerAlt className="me-2" />
              Office No.- 222, Shivalik, Bhumipark Society, Dabholi Village, Katargam
              Surat, Gujarat 395004
            </p>
            <p data-aos="zoom-in">
              <FaPhoneAlt className="me-2" /> +91 8866716108
            </p>
            <p data-aos="zoom-in">
              <FaPhoneAlt className="me-2" /> W :- +91 9409043854
            </p>
            <p data-aos="zoom-in">
              <FaEnvelope className="me-2" /> foreverdevelopers873@
              <br />
              gmail.com
            </p>
            <div className="d-flex justify-content-center justify-content-md-start pt-3">
              <Button
                data-aos="zoom-in"
                variant="primary"
                className="rounded-circle me-2"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="mb-1" />
              </Button>
              <Button
                data-aos="zoom-in"
                variant="primary"
                className="rounded-circle me-2"
                href="https://www.facebook.com/share/18fBA5yeD6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="mb-1" />
              </Button>
              <Button
                data-aos="zoom-in"
                variant="primary"
                className="rounded-circle me-2"
                href="https://www.youtube.com/@ForeverDevelopers-l7q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="mb-1" />
              </Button>
              <Button
                data-aos="zoom-in"
                variant="primary"
                className="rounded-circle me-2"
                href="https://www.linkedin.com/company/forever-developer/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="mb-1" />
              </Button>
            </div>
          </Col>

          {/* Services Section */}
          <Col lg={3} md={6}>
            <h5 data-aos="zoom-in" className="text-white mb-4 ms-3">
              Services
            </h5>
            <Nav className="flex-column">
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/WebDesignWebDevelopment"
                onClick={() => history.push("/WebDesignWebDevelopment")}
              >
                Web Development
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/MobileAppDevelopment"
                onClick={() => history.push("/MobileAppDevelopment")}
              >
                Mobile App Development
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/UiUx"
                onClick={() => history.push("/UiUx")}
              >
                UI/UX Design
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/GameDevelopment"
                onClick={() => history.push("/GameDevelopment")}
              >
                Game Development
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/CyberSecurity"
                onClick={() => history.push("/CyberSecurity")}
              >
                Cyber Security (VAPT)
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/DigitalMarketing"
                onClick={() => history.push("/DigitalMarketing")}
              >
                Digital Marketing
              </Nav.Link>
            </Nav>
          </Col>

          {/* Quick Links Section */}
          <Col lg={3} md={6}>
            <h5 data-aos="zoom-in" className="text-white mb-4">
              Quick Links
            </h5>
            <Nav className="flex-column">
              <Nav.Link data-aos="zoom-in" className="text-light" href="/">
                Home
              </Nav.Link>
              <Nav.Link data-aos="zoom-in" className="text-light" href="/about">
                About Us
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/Technologylanguage"
              >
                T & L
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/careers"
              >
                Careers
              </Nav.Link>
              <Nav.Link
                data-aos="zoom-in"
                className="text-light"
                href="/Contect"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          {/* Business Hours Section */}
          <Col lg={3} md={6}>
            <h5 data-aos="zoom-in" className="text-white mb-4">
              Business Hours
            </h5>
            <p data-aos="zoom-in" className="mb-1">
              Monday - Friday
            </p>
            <h6 data-aos="zoom-in" className="text-light">
              09:00 am - 07:00 pm
            </h6>
            <p data-aos="zoom-in" className="mb-1">
              Saturday
            </p>
            <h6 data-aos="zoom-in" className="text-light">
              09:00 am - 05:00 pm
            </h6>
            <p data-aos="zoom-in" className="mb-1">
              Sunday
            </p>
            <h6 data-aos="zoom-in" className="text-light">
              Closed
            </h6>
          </Col>
        </Row>

        <hr className="bg-light my-5" />

        {/* Copyright Section */}
        <div className="text-center">
          <p className="mb-0">
            Copyright © 2025 Forever Developer, All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
