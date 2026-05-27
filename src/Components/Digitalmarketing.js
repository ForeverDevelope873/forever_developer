import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import Digital from '../IMG/Digital Marketing 3.jpg';

function Digitalmarketing() {
  const history = useHistory();
  return (
    <>
      <section className="DigitalMarketing">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Digital Marketing Detail</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/Services")}>
                  Services
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Digital Marketing</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container className="py-5">
          <Row className="text-align-justyfiy">
            <Col lg={6} md={6}>
              <h2 data-aos="zoom-in" className="text-primary fw-bold">Digital Marketing</h2>

              <ul className="mt-3 text-align-justyfiy" style={{ fontSize: "1.1rem" }}>
                <h3 data-aos="zoom-in" className="pt-4">
                  <strong>Why Social Media Marketing?</strong>
                </h3>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Boost Brand Awareness:</strong> Reach millions of potential customers on platforms like Instagram, Facebook, LinkedIn, Twitter, and TikTok.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Increase Engagement:</strong> Build a loyal community with interactive content, viral campaigns, and strategic storytelling.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Generate More Leads & Sales:</strong> Turn social media followers into paying customers with high-converting strategies.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Targeted Advertising:</strong> Reach the right audience with advanced AI-driven ad targeting, ensuring maximum ROI.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Stay Ahead of Competitors:</strong> Outshine your competition with trend-driven content, innovative strategies, and real-time audience engagement.
                </li>

                <h3 data-aos="zoom-in" className="pt-4">
                  <strong>Our Social Media Marketing Services</strong>
                </h3>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Content Strategy & Creation:</strong> Engaging posts, eye-catching graphics, and viral-worthy videos designed to attract and retain your audience.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Social Media Advertising:</strong> Data-driven paid campaigns on Facebook, Instagram, LinkedIn, and more, ensuring you get the best results.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Analytics & Performance Tracking:</strong> We provide detailed reports and insights, so you know exactly how your brand is performing online.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Reels & Video Marketing:</strong> High-quality short-form videos that captivate audiences and drive massive engagement.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>E-commerce Social Media Growth:</strong> Transform your social media into a sales-generating machine with product promotions, shoppable posts, and targeted ad campaigns.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>24/7 Community Management:</strong> We manage comments, messages, and interactions, ensuring your audience stays engaged and satisfied.
                </li>
              </ul>
            </Col>
            <Col lg={6} md={6} className="d-flex align-items-center justify-content-center">
              <Card style={{ width: "100%", background: "transparent", border: "none" }}>
                <Card.Img data-aos="zoom-in" src={Digital} alt="Web Design & Development" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Digitalmarketing;