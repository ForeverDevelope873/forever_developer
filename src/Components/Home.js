import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Nav,
  Container,
  Button,
  Tab,
} from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import img from "../IMG/img.png";
import Xyz from "./Xyz";
import { FaCheck, FaBars } from "react-icons/fa";
import img1 from "../IMG/wd1.jpg";
import img2 from "../IMG/mad.jpg";
import img3 from "../IMG/UI_UX-Design.jpg";
import img4 from "../IMG/game-development.jpg";
import img5 from "../IMG/Cyber Security.jpg";
import img6 from "../IMG/digital marketing1.jpg";
import IndustriesServed from "../Components/IndustriesServed";
import Testimonials from "./Testimonials";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const services = [
    {
      id: "tab-pane-1",
      title: "Web Development",
      image: img1,
      features: [
        "Frontend Development",
        "Backend Development",
        "API Development",
        "Marketing Website",
        "E-Commerce Website",
        " Custom Web Development ",
        " UI & UX Design ",
        "Shopify Website Development ",
        "Wordpress Website Development",
      ],
    },
    {
      id: "tab-pane-2",
      title: "Mobile App Development",
      image: img2,
      features: [
        "Android app development",
        "Flutter App Development",
        "IOS App Development",
        "QA & testing",
        " UI & UX design ",
      ],
    },
    {
      id: "tab-pane-3",
      title: "UI/UX Design",
      image: img3,
      features: [
        "Mobile App Design",
        "Website Design",
        "Social Media Post Design",
        "Festival Post Design",
        "Logo Design",
        " Digital Business Card ",
      ],
    },
    {
      id: "tab-pane-4",
      title: "Game Development",
      image: img4,
      features: [
        "2D Game ",
        "3D Game",
        "2.5D Game",
        "Level Generation",
        " Multiplayer Game ",
        " Physics Simulation ",
        " UI design ",
        " 2D Animation ",
      ],
    },
    {
      id: "tab-pane-5",
      title: "Cyber Security [ VAPT ] ",
      image: img5,
      features: [
        "Vulnerability Scan & Assessment",
        "Penetration Testing",
        "Web Applications / API'S Pentesting",
        "Wi-Fi Pentesting",
        " Infrastructure Pentesting ",
        " Internal Network Pentesting ",
        " Mobile Apps Pentesting ",
        " Crystal Box Kubernetes Pentesting ",
        " Cloud Pentesting ",
      ],
    },
    {
      id: "tab-pane-6",
      title: "Digital Marketing ",
      image: img6,
      features: ["Social Media Marketing"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center text-lg-start mt-2 py-5 ">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 data-aos="zoom-in" className="display-4 fw-bold">
                Great <span className="text-primary">Product</span> is
                <br />
                <span className="fw-bold text-dark">built by great</span>{" "}
                <span className="text-purple">teams</span>
              </h1>
              <p data-aos="zoom-in" className="lead text-muted ">
                We help build and manage a team of world-class developers
                <br /> to bring your vision to life.
              </p>
              <Button
                onClick={() => history.push("/Contect")}
                data-aos="zoom-in"
                variant="primary"
                size="lg"
                className="mt-3 text-align-justyfiy"
              >
                Let's get started!
              </Button>
            </Col>

            <Col lg={6} className="text-center text-lg-end">
              <img
                data-aos="zoom-in"
                src={img}
                alt="Illustration of a team working together"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Xyz />
      </section>

      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h2 data-aos="zoom-in" className="">
              Our Service
            </h2>
            <p
              data-aos="zoom-in"
              className="d-inline-block pt-3 text-align-justyfiy py-1 px-1"
            >
              Forever Developer is an innovative technology company specializing
              in IT services and custom software development. Our expert team
              delivers cutting-edge solutions tailored to meet diverse business
              needs.
            </p>
          </div>

          <Tab.Container defaultActiveKey="tab-pane-1">
            <Row className="g-4">
              {/* Left Side - Navigation */}
              <Col lg={4}>
                <Nav variant="pills" className="flex-column">
                  {services.map((service) => (
                    <Nav.Item
                      data-aos="zoom-in"
                      key={service.id}
                      className="mb-3"
                    >
                      <Nav.Link
                        eventKey={service.id}
                        className="d-flex align-items-center text-start border p-3"
                      >
                        <FaBars className="text-primary me-3" size={20} />
                        <h5 className="m-0">{service.title}</h5>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>

              {/* Right Side - Content */}
              <Col lg={8}>
                <Tab.Content>
                  {services.map((service) => (
                    <Tab.Pane key={service.id} eventKey={service.id}>
                      <Row className="g-4">
                        <Col md={6} style={{ minHeight: "350px" }}>
                          <img
                            data-aos="zoom-in"
                            src={service.image}
                            className="rounded w-100 h-100"
                            style={{ objectFit: "cover" }}
                            alt={service.title}
                          />
                        </Col>
                        <Col md={6}>
                          <h3 data-aos="zoom-in" className="mb-4">
                            {service.description}
                          </h3>
                          {service.features.map((feature, index) => (
                            <p data-aos="zoom-in" key={index}>
                              <FaCheck className="text-primary me-2" /> {feature}
                            </p>
                          ))}
                        </Col>
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

      <section>
        <IndustriesServed />
      </section>

      <section>
        <Testimonials />
      </section>
    </>
  );
};

export default Home;