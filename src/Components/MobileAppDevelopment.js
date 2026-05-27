import React from 'react';
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import MobileAppDevelopmen from '../IMG/MobileAppDevelopment-removebg-preview.jpg';
import MobileAppDevelopmen1 from '../IMG/MobileAppDevelopment-removebg-preview 1.jpg';

function MobileAppDevelopment() {
  const history = useHistory();
  return (
    <>
      <section className="MobileAppDevelopment">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Mobile App Development Detail</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/Services")}>
                  Services
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Mobile App Development</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={6} md={6}>
              <h2 data-aos="zoom-in" className="text-primary fw-bold text-align-justyfiy">Custom Mobile App Development Solutions</h2>
              <p data-aos="zoom-in" className="pt-3 text-align-justyfiy">
                At Forever Developer, we craft innovative and highly functional mobile applications tailored to your business needs. Whether you're looking to build a cutting-edge iOS or Android app, we ensure top-notch performance, seamless user experience, and scalability to help you stay ahead in the digital landscape.
              </p>
              <h4 data-aos="zoom-in" className="pt-2 text-align-justyfiy">
                <b>Why Choose Our Mobile App Development Services?</b>
              </h4>
              <ul className="mt-3 text-align-justyfiy" style={{ fontSize: "1.1rem" }}>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Bespoke Mobile Solutions:</strong> We design and develop custom apps for smartphones and tablets, ensuring they align perfectly with your business goals and user needs.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Cross-Platform Compatibility:</strong> Our expert developers build apps for both iOS (Apple App Store) and Android (Google Play Store), ensuring smooth performance across different devices.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Feature-Rich Applications:</strong> From social networking and gaming to productivity and utility apps, we develop powerful mobile solutions that engage users and enhance efficiency.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Optimized User Experience:</strong> We integrate advanced mobile features such as touchscreen gestures, GPS tracking, high-quality camera functions, and motion sensors to deliver an intuitive and immersive experience.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Seamless Cross-Platform Performance:</strong> With frameworks like Flutter and React Native, we build apps that run effortlessly on multiple devices without compromising quality.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>24/7 Accessibility for Users:</strong> Empower your customers with mobile apps that offer on-the-go access to services, products, and real-time information—anytime, anywhere.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>Hassle-Free App Store Launch:</strong> We handle the entire app submission process, ensuring your app meets the guidelines of the Apple App Store and Google Play Store for smooth approval and publishing.
                </li>
                <li data-aos="zoom-in" className="pt-1">
                  <strong>User-Centric & Engaging Designs:</strong> Our UI/UX experts create stunning, easy-to-use interfaces that captivate users and enhance overall engagement.
                </li>
              </ul>
            </Col>
            <Col lg={6} md={6} className="d-flex align-items-center justify-content-center">
              <Card style={{ width: "100%", background: "transparent", border: "none" }}>
                <Card.Img data-aos="zoom-in" src={MobileAppDevelopmen} alt="Web Design & Development" /> <br /><br />
                <Card.Img data-aos="zoom-in" src={MobileAppDevelopmen1} alt="Web Design & Development" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default MobileAppDevelopment;