import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import cyber from '../IMG/Cyber Security [ VAPT ] 1.jpg';
import { useHistory } from "react-router-dom";

function Cybersecurity() {
  const history = useHistory();
  return (
    <>
      <section className="CyberSecurity">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Cyber Security [ VAPT ] Detail</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/Services")}>
                  Services
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Cyber Security [ VAPT ]</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container className="py-5">
          <Row className="text-align-justyfiy">
            <Col lg={6} md={6}>
              <h2 data-aos="zoom-in" className="text-primary fw-bold">Cyber Security [ VAPT ]</h2>
              <h3 data-aos="zoom-in" className="pt-4">
                <strong>Here's a more detailed explanation of how VAPT works</strong>
              </h3>
              <ul className="mt-3 text-align-justyfiy" style={{ fontSize: "1.1rem" }}>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Vulnerability Assessment (VA):</strong> <br /> <strong>Objective:</strong>
                  To identify potential weaknesses or flaws in systems, networks, applications, and infrastructure. <br />
                  <strong>Methods:</strong>
                  Automated Scanning: Using tools to scan for known vulnerabilities and misconfigurations.
                  Manual Analysis: Security professionals manually inspect systems and applications for vulnerabilities that may not be detected by automated tools. <br />
                  <strong>Output:</strong>
                  A list of identified vulnerabilities, their severity, and potential impact.
                </li>
                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Penetration Testing (PT):</strong> <br /> <strong>Objective:</strong>
                  To simulate real-world cyberattacks to exploit identified vulnerabilities and assess the effectiveness of security controls. <br />
                  <strong>Methods:</strong>
                  Ethical Hacking: Security professionals use their skills and techniques to attempt to gain unauthorized access to systems and data.
                  Exploitation: Attempting to exploit vulnerabilities to determine if they can be used to compromise the system. <br />
                  <strong>Output:</strong>
                  A report detailing the vulnerabilities that were successfully exploited, the level of access gained, and recommendations for remediation.
                </li>
              </ul>
            </Col>
            <Col lg={6} md={6} className="d-flex align-items-center justify-content-center">
              <Card style={{ width: "100%", background: "transparent", border: "none" }}>
                <Card.Img data-aos="zoom-in" src={cyber} alt="Web Design & Development" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Cybersecurity;