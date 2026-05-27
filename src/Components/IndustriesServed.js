import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaBed } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { MdFactory } from "react-icons/md";

function IndustriesServed() {
  const industries = [
    { name: 'Hospitality', icon: <FaBed /> },
    { name: 'Retail', icon: <FaCartArrowDown /> },
    { name: 'E-commerce', icon: <FaShoppingCart /> },
    { name: 'Food Industry', icon: <FaPizzaSlice /> },
    { name: 'IT Industry', icon: <FaLaptopCode /> },
    { name: 'Diamond Industry', icon: <IoDiamond /> },
    { name: 'Contraction Industry', icon: <FaBuilding /> },
    { name: 'Media Industry', icon: <IoIosVideocam /> },
    { name: 'Education', icon: <MdCastForEducation /> },
    { name: 'Travel & Tourism', icon: <IoIosAirplane /> },
    { name: 'Medical & Other Agency', icon: <MdFactory /> },
  ];

  return (
    <>
      <section className='IndustriesServed'>
        <Container className="my-5">
          <h2 data-aos="zoom-in" className="text-center mb-4">We work for so many companies and industries</h2>
          <Row className="justify-content-center">
            {industries.map((industry, index) => (
              <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
                <Card data-aos="zoom-in" className="h-100 d-flex mt-5 flex-column">
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <div style={{ fontSize: '2em' }}>{industry.icon}</div>
                    <Card.Title className="text-center mt-3">{industry.name}</Card.Title>
                  </Card.Body>
                  <Card.Footer className="border-0 bg-white text-end">
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default IndustriesServed;