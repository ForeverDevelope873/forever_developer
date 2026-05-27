import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CountingSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 784) {
        setCount1(count1 + 1);
      }
    }, 15); // Adjust interval for speed

    const interval2 = setInterval(() => {
      if (count2 < 790) {
        setCount2(count2 + 1);
      }
    }, 15);

    const interval3 = setInterval(() => {
      if (count3 < 790) {
        setCount3(count3 + 1);
      }
    }, 15);

    const interval4 = setInterval(() => {
      if (count4 < 784) {
        setCount4(count4 + 1);
      }
    }, 15);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [count1, count2, count3, count4]);

  return (
    <div className="container-fluid  facts my-5 py-5" style={{ backgroundColor: "#E8F1FF" }}>
      <Container className="py-5"> {/* Use Bootstrap Container */}
        <Row className="g-5">
          <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.1s">
            <i className="fa fa-users fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white">{count1}</h1> {/* Dynamic count */}
            <span className="fs-5 text-white">Happy Clients</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </Col>
          <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.3s">
            <i className="fa fa-check fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white">{count2}</h1> {/* Dynamic count */}
            <span className="fs-5 text-white">Projects Completed</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </Col>
          <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.5s">
            <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white">{count3}</h1> {/* Dynamic count */}
            <span className="fs-5 text-white">Dedicated Staff</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </Col>
          <Col sm={6} lg={3} className="text-center wow fadeIn" data-wow-delay="0.7s">
            <i className="fa fa-award fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white">{count4}</h1> {/* Dynamic count */}
            <span className="fs-5 text-white">Awards Achieved</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountingSection;