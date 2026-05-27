import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import about from "../IMG/AB.jpg";
import about1 from "../IMG/about.jpg";
import { FaLightbulb, FaSearch, FaPencilRuler, FaCode, FaBug, FaRocket } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import sahil from '../IMG/sahil.jpg';
import hiren from '../IMG/hiren bhai.jpg';
import manish from '../IMG/manish.jpg';
import jaydip from '../IMG/jaydip.jpg';
import uday from '../IMG/uday.jpg';
import mohit from '../IMG/mohit.jpg';
import utsav from '../IMG/utsav.jpg';
import bhavin from '../IMG/syber team.jpg';
import dhruv from '../IMG/dhruv.jpg';

function About() {
  const history = useHistory();

  const steps = [
    { icon: <FaLightbulb />, title: "Planning", description: "We define objectives, scope, and requirements to ensure a clear roadmap for project success." },
    { icon: <FaSearch />, title: "Research", description: "We analyze market trends, technologies, and user needs to create a strong foundation." },
    { icon: <FaPencilRuler />, title: "Designing", description: "We craft intuitive UI/UX for seamless user experiences and brand alignment." },
    { icon: <FaCode />, title: "Development", description: "We implement functionalities with clean, efficient, and scalable code." },
    { icon: <FaBug />, title: "Testing", description: "We conduct rigorous testing to identify and resolve issues, ensuring quality assurance." },
    { icon: <FaRocket />, title: "Launch Project", description: "We deploy the final product smoothly, ensuring optimal performance and reliability." }
  ];

  return (
    <>
      <section className="About"> 
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">About Us</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">About Us</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="about" id="about">
        <Container>
          <div className="text-center pt-5">
            <h1 data-aos="zoom-in">
              About <span className="text-primary">me</span>
            </h1>
            <hr data-aos="zoom-in" className="w-25 mb-4 m-auto" />
            <p data-aos="zoom-in" className="display-10">
              Achieving Success Through Innovation and Excellence
            </p>
          </div>

          <Row>
            <Col sm={12} md={6} lg={6}>
              <h5 data-aos="zoom-in" className="p-2 mt-4 text-align-justyfiy">
                <b> Fueling Your Digital Evolution </b>
              </h5>

              <p data-aos="zoom-in" className="p-2 text-align-justyfiy">
                Forever Developer is a dynamic and forward-thinking software development company dedicated to delivering cutting-edge IT solutions to businesses worldwide. With a passion for technology and excellence, we specialize in bespoke software development, IT services, and digital transformation strategies that empower businesses to thrive in an ever-evolving digital landscape.
              </p>
              <p data-aos="zoom-in" className="p-2 text-align-justyfiy">
                At Forever Developer, our commitment to innovation and quality is evident in the success stories of our clients. We have collaborated with diverse industries, providing tailored solutions that not only meet but exceed expectations. Our expertise lies in developing scalable, secure, and high-performance applications that drive business growth and efficiency.
              </p>
              <p data-aos="zoom-in" className="p-2 text-align-justyfiy">
                For us, every project is more than just a task—it’s an opportunity to shape the future of technology and create lasting success together. Partner with Forever Developer and experience the perfect blend of expertise, creativity, and reliability in software development.
              </p>
            </Col>
            <Col sm={12} md={6} lg={6} className="m-auto text-center">
              <img data-aos="zoom-in"
                src={about}
                className="img-fluid shadow img-thumbnail"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about" id="about">
        <Container className="mb-5 mt-5">
          <div className="pt-5">
            <h1 data-aos="zoom-in" className="mb-4 text-center text-align-justyfiy">
              <b> We Help Our Clients To Grow Their Business </b>
            </h1>

            <p data-aos="zoom-in" className="mb-4 text-center text-align-justyfiy">
              Guided by our rich story, clear vision, and dedicated mission for a smarter tomorrow,<br /> we are committed to delivering exceptional technology that drives your success.
            </p>
          </div>

          <Row>
            <Col className="wow fadeInUp mt-5" data-wow-delay="0.1s" sm={12} md={6} lg={6}>
              <Image data-aos="zoom-in" src={about1} className="img-fluid rounded" alt="About Us" />
            </Col>

            <Col sm={12} md={6} lg={6} className="m-auto mt-5 ">
              <div data-aos="zoom-in" className="border rounded p-4">
                <Tab.Container id="nav-tab" defaultActiveKey="story">
                  <Nav variant="tabs" className="mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="story" className="fw-semi-bold">
                        Story
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="vision" className="fw-semi-bold">
                        Vision
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="mission" className="fw-semi-bold">
                        Mission
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="nav-tabContent">
                    <Tab.Pane eventKey="story">
                      <p className="text-align-justyfiy">
                        At Forever Developer, our journey began with a shared commitment to redefining the way businesses approach technology. We recognized early on that the future of business is deeply intertwined with digital transformation, but many companies lacked the right IT partner to guide them through this evolution. <br /><br />
                        Before our official launch on April 1, 2025, we meticulously built a team of exceptional developers, designers, and project managers, all united by one goal: to turn visionary ideas into powerful, actionable digital solutions. We didn't just want to start a company—we sought to build a legacy of trust, collaboration, and innovation. We believe that your success is our success, and we’re here to grow alongside you. <br /><br />
                        Today, Forever Developer is more than just a service provider—we are your dedicated partner in achieving breakthrough results. With a focus on quality, agility, and a customer-first mindset, we are ready to help bring your ideas to life and drive lasting impact for your business.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="vision">
                      <p className="text-align-justyfiy">
                        Our vision is to be the driving force behind the digital revolution, helping businesses of every scale unlock their full potential through seamless, transformative technology. We see a future where innovation is at the core of every business operation, creating efficient, scalable, and sustainable growth in an ever-changing digital world. <br /><br />
                        At Forever Developer, we aspire to be the trusted partner of choice for businesses looking to future-proof their operations, harness the power of technology, and stay ahead of the curve in this digital-first era.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="mission">
                      <p className="text-align-justyfiy">
                        At Forever Developer, our mission is to deliver not just solutions, but transformative experiences that drive measurable success for our clients. Our commitment is to: <br /><br />
                        <b> Understand and Elevate Your Vision: </b> We dive deep into understanding the unique needs of your business, ensuring that every solution we deliver is fully aligned with your objectives and ambitions. <br /><br />
                        <b> Innovate and Execute with Precision:</b> We embrace cutting-edge technology and innovative strategies to create solutions that are not only effective but also resilient, scalable, and secure. <br /><br />
                        <b> Cultivate Long-Term Relationships: </b> Building trust and open communication is key to our philosophy. We foster partnerships that last, working together to achieve both immediate results and long-term goals. <br /><br />
                        <b> Create Impactful Results: </b> Our focus is on delivering solutions that empower your business to succeed today and thrive tomorrow, driving innovation, efficiency, and growth along the way.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="text-center my-5">
          <h1 data-aos="zoom-in" className="mb-4">How We Work</h1>
          <p data-aos="zoom-in" className="">Unveiling Our Methodology: A Focus on Efficiency, Collaboration, and Innovation</p>
          <Row className="mt-5">
            {steps.map((step, index) => (
              <Col md={4} sm={6} key={index} className="mb-4">
                <Card data-aos="zoom-in" className="p-3 shadow h-100">
                  <div className="display-4 text-primary mb-3">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p className="text-align-justyfiy">{step.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Container className="my-5">
        <h2 data-aos="zoom-in" className="text-center mb-4">Our Team</h2>
        <p data-aos="zoom-in" className=" text-center justify-content-center">Our success stems from strong teamwork, technical expertise, and a creative approach, <br /> allowing us to deliver comprehensive solutions to our clients.</p>
        <Row className="justify-content-center mt-5">
          {/* Team Member Cards */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={sahil}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Sahil Ghoghari</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Founder & CEO</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={hiren}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Hiren Ghoghari</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Python Developer</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={manish}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Manish Ghoghari</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Game Developer</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={jaydip}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Jaydip Tarsariya</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">UI/UX Designer</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={uday}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Uday Unagar</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={mohit}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Mohit Kalsariya</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">App Developer</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={utsav}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Utsav Vanani</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={bhavin}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Bhavin Ambaliya</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Cyber Security</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card data-aos="zoom-in" className="text-center">
              <Image
                src={dhruv}
                roundedCircle
                className="mx-auto mt-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Dhruv Ahir</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Full Stack Developer</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;