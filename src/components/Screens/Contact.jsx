import React from "react"
import {
  Container,
  Form,
  Col,
  Row,
  Jumbotron,
  Image,
  Button,
} from "react-bootstrap"

const Contact = ({ id }) => {
  return (
    <Container id={id} fluid className="bg-white">
      <Jumbotron className="bg-white mb-0">
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center text-muted">Let us know your queries</p>
        <Row>
          <Col md={6} xs={12}>
            <Image fluid src={"undraw_contact_us_15o2.svg"} />
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
