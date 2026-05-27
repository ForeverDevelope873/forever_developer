import React from 'react';
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import uiux from '../IMG/ui-ux-design-agency-trio-web-design-examples-removebg-preview 123.png';

function UiUx() {
  const history = useHistory();
  return (
    <>
      <section className="UiUx">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">UI/UX Design Detail</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/Services")}>
                  Services
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">UI/UX Design</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container className="py-5">
          <Row className="align-items-center text-align-justyfiy">
            <Col lg={6} md={6}>
              <h2 data-aos="zoom-in" className="text-primary fw-bold">UI/UX Design</h2>
              <ul className="mt-4">
                <li data-aos="zoom-in" className="pt-1">
                  <strong>User-Centric Interfaces:</strong> We design applications with a focus on usability, simplicity, and engagement, ensuring users love every interaction.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Interactive & Intuitive Elements:</strong> From buttons and sliders to text fields and navigation menus, we craft elements that enhance the user journey.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Seamless Screen Layouts:</strong> We create structured, clutter-free layouts that guide users effortlessly through your app or website.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Smooth Transitions & Animations:</strong> Our expert designers implement engaging animations and micro-interactions that add life to your digital platform.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Consistent Branding & Aesthetic Appeal:</strong> We ensure that every color, font, and design element aligns with your brand identity and industry standards.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Fully Responsive Designs:</strong> Your users will enjoy a seamless experience across all devices, whether desktop, tablet, or mobile.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Optimized for Conversions:</strong> We strategically design layouts and call-to-actions (CTAs) to boost engagement and drive results for your business.
                </li>
              </ul>
            </Col>
            <Col lg={6} md={6} className="text-center">
              <Card style={{ width: "100%", background: "transparent", border: "none" }}>
                <Card.Img data-aos="zoom-in" src={uiux} alt="Web Design & Development" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default UiUx;