import React from 'react';
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import html from '../IMG/html.jpg';
import css from '../IMG/css.jpg';
import bootstrap from '../IMG/bootstrap.jpg';
import node from '../IMG/node.jpg';
import python from '../IMG/python.jpg';
import php from '../IMG/php.jpg';
import Flutter from '../IMG/Flutter.jpg';
import Android from '../IMG/Android.jpg';
import mongodb from '../IMG/mongodb.png';
import ex from '../IMG/ex.jpg';
import react from '../IMG/react.jpg';
import figma from '../IMG/figma.jpg';
import c from '../IMG/c.jpg';
import javascript from '../IMG/javascript.png';
import laravel from '../IMG/Laravel-Logo.png';

function Technologylanguage() {
  const history = useHistory();
  return (
    <>
      <section className="Technologylanguage">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Technology & language</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Technology & language</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="about" id="about">
        <Container>
          <div className="text-center pt-5">
            <h1 data-aos="zoom-in">
              Technology & <span className="text-primary">language</span>
            </h1>
            <hr data-aos="zoom-in" className="w-25 mb-4 m-auto" />
            <p data-aos="zoom-in" className="display-10">
              Our company works on these technologies and languages
            </p>
          </div>

          <Row>
            <div className="container container-services">
              <div className="row">
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={html} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">HTML</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={css} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">CSS</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={bootstrap} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">BOOTSTRAP</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={node} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">NODE.JS</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={python} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">PYTHON</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={php} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">PHP</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={Flutter} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">FLUTTER</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={Android} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">ANDROID</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={mongodb} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">MONGODB</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={ex} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">EXPRESS.JS</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={react} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">REACT.JS</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={figma} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">FIGMA</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={c} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">C, C++, C#</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={javascript} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">JAVASCRIPT</h3>
                  </div>
                </div>
                <div data-aos="zoom-in" className="col-lg-3 col-md-6 px-lg-2 my-2">
                  <div className="content-services">
                    <div className="img-container">
                      <img src={laravel} className="img-service" alt="" />
                    </div>
                    <h3 className="heading-tour">LARAVEL</h3>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Technologylanguage;