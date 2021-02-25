import React from "react"
import { Container, Form, Col, Row, Jumbotron, Button } from "react-bootstrap"
import Image from "../image"

const Contact = ({ id }) => {
  return (
    <Container id={id} fluid className="bg-white">
      <Jumbotron className="bg-white mb-0">
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center text-muted">Let us know your queries</p>
        <Row>
          <Col
            className="d-md-block d-flex justify-content-center"
            md={6}
            xs={12}
          >
            <Image
              className="h-auto w-75 img-fluid mb-5 full-width"
              imgsrc="undraw_contact_us_15o2.png"
            ></Image>
          </Col>

          <Col md={6} xs={12}>
            <br></br>
            <Form
              action="https://send.pageclip.co/D80HHI5YzOenbs45w3Je8xpiWr8yW5Z5"
              method="post"
            >
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="First name"
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    required
                  />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    name="message"
                    placeholder="Message"
                    as="textarea"
                  />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Button type="submit" className="submit-btn">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  )
}

export default Contact
