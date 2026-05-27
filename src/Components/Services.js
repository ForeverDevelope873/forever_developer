import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function Services() {
  const history = useHistory();

  return (
    <>
      <section className="Services">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Services</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Services</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container>
          {/* Title Section */}
          <div className="text-center pt-5">
            <h1 data-aos="zoom-in">
              Our <span className="text-primary">Services</span>
            </h1>
            <hr data-aos="zoom-in" className="w-25 mb-4 m-auto" />
            <p data-aos="zoom-in" className="">
              Holistic solutions customized to fit your specific requirements
            </p>
          </div>

          {/* Services Section */}
          <div className="body">
            <Row className="services_container mt-5 justify-content-center">
              <Col lg={4} className="mb-4">
                <div data-aos="zoom-in" className="serviceBox">
                  <div className="icon">
                    <i className="fab fa-sketch"></i>
                  </div>
                  <div className="content">
                    <h4>Web Development</h4>
                    <p>
                      Creating stunning and user-friendly designs for digital and print media.
                    </p>
                    <Button variant="light" onClick={() => history.push("/WebDesignWebDevelopment")}>More details</Button>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="mb-4">
                <div data-aos="zoom-in" className="serviceBox">
                  <div className="icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="content">
                    <h4>Mobile App Development</h4>
                    <p>
                      Building efficient, scalable, and modern web applications.
                    </p>
                    <Button variant="light" onClick={() => history.push("/MobileAppDevelopment")}>More details</Button>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="mb-4">
                <div data-aos="zoom-in" className="serviceBox">
                  <div className="icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="content">
                    <h4>UI/UX Design</h4>
                    <p>
                      Optimizing websites to rank higher on search engines and increase visibility.
                    </p>
                    <Button variant="light" onClick={() => history.push("/UiUx")}>More details</Button>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="mb-4">
                <div data-aos="zoom-in" className="serviceBox">
                  <div className="icon">
                    <i className="fa fa-gamepad" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h4>Game Development</h4>
                    <p>
                      Optimizing websites to rank higher on search engines and increase visibility.
                    </p>
                    <Button variant="light" onClick={() => history.push("/Gamedevelopment")}>More details</Button>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="mb-4">
                <div data-aos="zoom-in" className="serviceBox">
                  <div className="icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="content">
                    <h4>Cyber Security [ VAPT ]</h4>
                    <p>
                      Optimizing websites to rank higher on search engines and increase visibility.
                    </p>
                    <Button variant="light" onClick={() => history.push("/Cybersecurity")}>More details</Button>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="mb-4">
                <div data-aos="zoom-in" className="serviceBox">
                  <div className="icon">
                    <i className="fa-solid fa-bullhorn"></i>
                  </div>
                  <div className="content">
                    <h4>Digital Marketing</h4>
                    <p>
                      Optimizing websites to rank higher on search engines and increase visibility.
                    </p>
                    <Button variant="light" onClick={() => history.push("/Digitalmarketing")}>More details</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Services;