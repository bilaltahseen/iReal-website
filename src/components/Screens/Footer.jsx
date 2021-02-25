import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <Container style={{ backgroundColor: "#0d324d", color: "#fff" }} fluid>
      <Row className="p-5 text-md-left text-center">
        <Col md={6}>
          <h5 className="footer-text d-md-block d-none">
            Lorem Ipsum is simply dummy text <br></br> of the printing and
            typesetting industry.
          </h5>
          <h5 className="footer-text d-md-none d-block">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h5>
          <br></br>
          <Row className="footer-social">
            <Col>
              <FaFacebook size="2rem" />
            </Col>
            <Col>
              <FaLinkedin size="2rem" />
            </Col>
            <Col>
              <FaInstagram size="2rem" />
            </Col>
            <Col>
              <FaTwitter size="2rem" />
            </Col>
          </Row>
        </Col>
        <Col className="mt-md-0 mt-3" md={3}>
          <h4>Contact Information</h4>
          <ul className="footer-quick-links">
            <li>Phone : (+92)331-1385989</li>
            <li>Email : ireal@gmail.com</li>
          </ul>
        </Col>

        <Col className="mt-md-0 mt-3" md={2}>
          <h4>Quick Links</h4>
          <ul className="footer-quick-links">
            <li>
              <Link to="/#">Home</Link>
            </li>
            <li>
              <Link to="/#experties">Our Experties</Link>
            </li>
            <li>
              <Link to="/#clients">Clients</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </Col>
      </Row>
      <p className="text-center mb-0">All rights reserved @ireal/2021</p>
    </Container>
  )
}

export default Footer
