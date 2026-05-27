import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const UIUXDesign = () => {
  const designFeatures = [
    {
      title: "Interface Design",
      description: "Craft aesthetically pleasing and intuitive graphic layouts for applications."
    },
    {
      title: "Engaging Elements",
      description: "Develop buttons, sliders, text inputs, and other visual components users interact with."
    },
    {
      title: "Layout Structure",
      description: "Create streamlined, well-organized layouts for smooth and intuitive navigation."
    },
    {
      title: "Animation & Transitions",
      description: "Implement seamless motion effects and transitions to enrich user interaction."
    },
    {
      title: "Micro-Engagements",
      description: "Optimize subtle yet meaningful interactions that enhance user experience."
    },
    {
      title: "Design Consistency",
      description: "Ensure all interface elements follow a cohesive style that aligns with branding and usability principles."
    },
    {
      title: "Flexible Design",
      description: "Build responsive layouts that adjust seamlessly to different screen sizes and devices."
    },
    {
      title: "User-Oriented Approach",
      description: "Prioritize simplicity, accessibility, and user satisfaction through strategic design choices."
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-primary mb-4">UI/UX Design</h2>
      <Row>
        {designFeatures.map((feature, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UIUXDesign;