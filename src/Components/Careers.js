import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import careers from '../IMG/career.jpg';
import careers1 from '../IMG/careers 1.jpg';
import { useHistory } from "react-router-dom";

const Careers = () => {
  const history = useHistory();
  return (
    <div>
      <section className="GameDevelopment">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Careers</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Careers</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="about" id="about">
        <Container>
          <div className="text-center pt-5">
            <h1 data-aos="zoom-in">
              Employee <span className="text-primary">Benefits</span>
            </h1>
            <hr data-aos="zoom-in" className="w-25 mb-4 m-auto" />
            <p data-aos="zoom-in" className="display-10">
              Achieving Success Through Innovation and Excellence
            </p>
          </div>

          <Row>
            <Col sm={12} md={6} lg={6}>
              <ul className="mt-3 text-align-justyfiy" style={{ fontSize: "1.1rem" }}>
                <h4 data-aos="zoom-in" className="pt-4">
                  <strong>Careers at Forever Developer</strong>
                </h4>

                <p data-aos="zoom-in">
                  At Forever Developer, we believe that our employees are the backbone of our success. We are
                  committed to fostering a positive work environment that promotes growth, innovation, and
                  long-term career stability.
                </p>
                <hr data-aos="zoom-in" />

                <h3 data-aos="zoom-in" className='pt-3'>
                  <strong>🌟 Employee Benefits & Perks</strong>
                </h3>

                <li data-aos="zoom-in" className='pt-3'>
                  <strong>Competitive Salary & Performance Bonuses:</strong> We offer industry-leading salaries with regular performance-based increments and bonuses.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Flexible Work Environment:</strong> Hybrid work options (remote & in-office) to maintain a work-life balance. <br /> Flexible working hours to enhance productivity and personal well-being.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Health & Wellness:</strong> Comprehensive health insurance for employees and their families. <br /> Wellness programs, including gym memberships & mental health support.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Learning & Growth:</strong> Sponsored certifications and courses in the latest technologies. <br /> Access to online learning platforms and internal mentorship programs.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Career Development:</strong> Clear career progression paths with leadership training. <br /> Internal promotions and skill-based growth opportunities.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Work Culture & Engagement:</strong> A friendly and inclusive workplace with regular team outings, cultural events, and celebrations. <br /> Open-door policy, encouraging employees to voice ideas and concerns.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Paid Leaves & Holidays:</strong> Paid annual leaves, casual leaves, and sick days. <br /> Maternity & paternity leave for new parents.
                </li>

                <li data-aos="zoom-in" className='pt-1'>
                  <strong>Rewards & Recognition:</strong> Monthly and yearly awards to recognize outstanding contributions. <br /> Employee appreciation programs and gifts.
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} lg={6} className="m-auto text-center">
              <img data-aos="zoom-in"
                src={careers}
                className="img-fluid shadow img-thumbnail"
                alt=""
              />
              <img data-aos="zoom-in"
                src={careers1}
                className="img-fluid shadow img-thumbnail"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Careers;