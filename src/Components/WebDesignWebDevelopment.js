import React from 'react';
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import web from '../IMG/web-design-removebg-preview.png';

function WebDesignWebDevelopment() {
  const history = useHistory();
  return (
    <>
      <section className="WebDesignWebDevelopment">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Web Design & Web Development Detail</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/Services")}>
                  Services
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Web Design & Web Development</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container className="py-5">
          <Row className="text-align-justyfiy">
            <Col lg={6} md={6}>
              <h2 data-aos="zoom-in" className="text-primary fw-bold">Web Design & Web Development</h2>
              <ul className="mt-5" style={{ fontSize: "1.1rem" }}>
                <li data-aos="zoom-in" className='pt-1'><strong>Web Design:</strong> Crafting visually appealing and intuitive layouts for seamless user experiences.</li>
                <li data-aos="zoom-in" className='pt-1'><strong>UI/UX Principles:</strong> Focusing on usability, accessibility, and aesthetics.</li>
                <li data-aos="zoom-in" className='pt-1'><strong>Front-End Development:</strong> Implementing interactive interfaces using HTML, CSS, JavaScript, and modern frameworks.</li>
                <li data-aos="zoom-in" className='pt-1'><strong>Back-End Development:</strong> Building robust, scalable server-side solutions using Node.js, PHP, Python, and databases.</li>
                <li data-aos="zoom-in" className='pt-1'><strong>Responsive Design:</strong> Ensuring smooth performance across various devices and screen sizes.</li>
                <li data-aos="zoom-in" className='pt-1'><strong>SEO & Performance Optimization:</strong> Enhancing speed, accessibility, and search engine ranking.</li>
                <li data-aos="zoom-in" className='pt-1'><strong>Security & Maintenance:</strong> Implementing cybersecurity measures and regular updates.</li>
              </ul>
            </Col>
            <Col lg={6} md={6} className="d-flex align-items-center justify-content-center">
              <Card style={{ width: "100%", background: "transparent", border: "none" }}>
                <Card.Img data-aos="zoom-in" src={web} alt="Web Design & Development" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WebDesignWebDevelopment;