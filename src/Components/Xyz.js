import React from 'react';
import { FaCheck } from "react-icons/fa";

function Xyz() {
  return (
    <div>
      <div className="container-xxl feature py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: '',
                animationDelay: '0.1s',
                animationName: 'none',
              }}
            >
              <p data-aos="zoom-in" className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                Why Choosing Us!
              </p>
              <h1 data-aos="zoom-in" className="display-5 mb-4">
                Find Out More About Forever Developer
              </h1>
              <p data-aos="zoom-in" className="mb-4 text-align-justyfiy">
                Welcome to Forever Developer, where technology and innovation converge to shape the future!
              </p>
              <p data-aos="zoom-in" className="mb-4 text-align-justyfiy">
                We are a pioneering and result-oriented software development company, focused on delivering world-class IT services to our esteemed clients.
              </p>
              <p data-aos="zoom-in" className="mb-4 text-align-justyfiy">
                Forever Developer is a leading technology firm specializing in custom software development solutions and cutting-edge IT services. Our expertise spans a wide range of industries, offering solutions that are both innovative and scalable to meet the ever-evolving demands of the digital landscape.
              </p>
              <p data-aos="zoom-in" className="mb-4 text-align-justyfiy">
                At Forever Developer, we take pride in our commitment to excellence, which is clearly reflected in the numerous success stories we’ve cultivated over the years. We collaborate with businesses of all sizes, providing tailored solutions that not only meet but consistently exceed expectations.
              </p>
              <p data-aos="zoom-in" className="mb-4 text-align-justyfiy">
                Each project at Forever Developer is more than just a deliverable; it’s a partnership in creating transformative success and driving impactful results for our clients.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: '',
                        animationDelay: '0.3s',
                        animationName: 'none',
                      }}
                    >
                      <div data-aos="zoom-in" className="feature-box border rounded p-4">
                        <FaCheck data-aos="zoom-in" className="text-primary mb-3" size={48} />
                        <h4 data-aos="zoom-in" className="mb-3">Innovation</h4>
                        <p data-aos="zoom-in" className="mb-3 text-home">
                          We constantly redefine the limits of technology to provide innovative, state-of-the-art solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 wow fadeIn"
                  data-wow-delay="0.7s"
                  style={{
                    visibility: '',
                    animationDelay: '0.7s',
                    animationName: 'none',
                  }}
                >
                  <div data-aos="zoom-in" className="feature-box border rounded p-4">
                    <FaCheck data-aos="zoom-in" className="text-primary mb-3" size={48} />
                    <h4 data-aos="zoom-in" className="mb-3">Quality </h4>
                    <p data-aos="zoom-in" className="mb-3 text-home">
                      We are dedicated to providing top-tier products and exceptional services
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 wow fadeIn"
                  data-wow-delay="0.7s"
                  style={{
                    visibility: '',
                    animationDelay: '0.7s',
                    animationName: 'none',
                  }}
                >
                  <div data-aos="zoom-in" className="feature-box border rounded p-4">
                    <FaCheck data-aos="zoom-in" className="text-primary mb-3" size={48} />
                    <h4 data-aos="zoom-in" className="mb-3">Team work </h4>
                    <p data-aos="zoom-in" className="mb-3 text-home">
                      We are strong believers in the power of collaboration as the key to achieving our goals
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 wow fadeIn"
                  data-wow-delay="0.7s"
                  style={{
                    visibility: '',
                    animationDelay: '0.7s',
                    animationName: 'none',
                  }}
                >
                  <div data-aos="zoom-in" className="feature-box border rounded p-4">
                    <FaCheck data-aos="zoom-in" className="text-primary mb-3" size={48} />
                    <h4 data-aos="zoom-in" className="mb-3">Transparency </h4>
                    <p data-aos="zoom-in" className="mb-3 text-home">
                      We cultivate trust by fostering honest and transparent communication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xyz;


