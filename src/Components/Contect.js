import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Iframe from 'react-iframe';

const Contect = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
});

const [loading, setLoading] = useState(false);

// Handle input change
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Simple Validation Function
const validateForm = () => {
    if (!formData.name.trim()) {
        toast.error("Name is required!");
        return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        toast.error("Enter a valid email!");
        return false;
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
        toast.error("Enter a valid 10-digit phone number!");
        return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
        toast.error("Message must be at least 10 characters!");
        return false;
    }
    return true;
};

// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
        const response = await fetch("http://localhost:8000/user/contect", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
            toast.error(result.message || "Something went wrong!");
        }
    } catch (error) {
        toast.error("Failed to send message. Try again.");
    }

    setLoading(false);
};

  return (
    <>
      <section className="Technologylanguage">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 data-aos="zoom-in" className="text">Contect</h1>
                <button data-aos="zoom-in" className="about-a" onClick={() => history.push("/")}>
                  Home
                </button>
                <button data-aos="zoom-in" className="about-a">/</button>
                <button data-aos="zoom-in" className="about-a">Contect</button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <div className="container mt-5">
        <div className="text-center">
          <h1 data-aos="zoom-in" className="display-6 fw-bold">📩 Contact Us</h1>
          <p data-aos="zoom-in" className="text-muted">We'd love to hear from you! Fill out the form below.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-4 rounded">
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Field */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Message Field */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows={4}
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      <Iframe
        className="mt-5"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177.04848591355614!2d72.81186382354478!3d21.23477705938807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f003b02cb87%3A0x5a49b286bec6bb37!2sForever%20company!5e1!3m2!1sen!2sin!4v1742943704135!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 1 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
    </>
  );
};

export default Contect;