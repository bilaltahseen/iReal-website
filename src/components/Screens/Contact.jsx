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

const Contact = () => {
  return (
    <Container fluid className="bg-white">
      <Jumbotron className="bg-white">
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center text-muted">Let us know your queries</p>
        <Row>
          <Col md={6} xs={12}>
            <Image fluid src={"undraw_contact_us_15o2.svg"} />
          </Col>
          <Col md={6} xs={12}>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Form.Control placeholder="Email" />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Form.Control placeholder="Message" as="textarea" />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Button className="submit-btn">Submit</Button>
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
