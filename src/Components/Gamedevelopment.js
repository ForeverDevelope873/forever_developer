import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import game from '../IMG/pubg-game-development.jpg';
import { useHistory } from "react-router-dom";

function Gamedevelopment() {
  const history = useHistory();
  return (
    <div>
      <section className="GameDevelopment">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Game Development Detail</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/Services")}>
                  Services
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Game Development</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container className="py-5">
          <Row className="text-align-justyfiy">
            <Col lg={6} md={6}>
              <h2 data-aos="zoom-in" className="text-primary fw-bold">Game Development</h2>
              <h3 data-aos="zoom-in" className="pt-4">
                <strong>Our Game Development Expertise</strong>
              </h3>
              <ul className="mt-3 text-align-justyfiy" style={{ fontSize: "1.1rem" }}>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>2D Game Development:</strong> Simple, engaging, and optimized for fast-paced gameplay, perfect for mobile, web, and arcade-style games.
                </li>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>3D Game Development:</strong> High-quality models, realistic environments, and smooth animations for PC, console, and VR gaming.
                </li>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>2.5D Game Development:</strong> A mix of 2D visuals with 3D depth to create visually stunning and unique gameplay experiences.
                </li>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Level Generation & Design:</strong> Carefully crafted game levels that enhance player engagement and deliver smooth progression.
                </li>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Multiplayer Game Development:</strong> Real-time, online multiplayer integration with smooth server connectivity and lag-free performance.
                </li>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Physics Simulation:</strong> Real-world physics integration for lifelike character movements, object interactions, and game mechanics.
                </li>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>UI/UX Game Design:</strong> Intuitive interfaces, engaging visuals, and user-friendly controls for an enhanced gaming experience.
                </li>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>2D Animation & Motion Graphics:</strong> High-quality animations, fluid motion effects, and character expressions for engaging storytelling.
                </li>
              </ul>
            </Col>
            <Col lg={6} md={6} className="d-flex align-items-center justify-content-center">
              <Card style={{ width: "100%", background: "transparent", border: "none" }}>
                <Card.Img data-aos="zoom-in" src={game} style={{ height: "430px" }} alt="Web Design & Development" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Gamedevelopment;