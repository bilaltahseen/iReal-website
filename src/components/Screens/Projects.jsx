import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import ProjectCard from "../Elements/ProjectCard"

const Projects = ({ id }) => {
  return (
    <Container id={id} fluid className="bg-white p-5 text-center">
      <h2>Our most recent projects</h2>

      <div className="d-flex justify-content-center">
        <Button className="projects-btn" variant="outline-primary">
          Media Projects
        </Button>

        <Button
          className="projects-btn border-left-0"
          variant="outline-primary"
        >
          IT Projects
        </Button>
      </div>

      <Row className="my-5">
        <Col md={3}>
          <ProjectCard />
        </Col>
        <Col md={3}>
          <ProjectCard />
        </Col>
        <Col md={3}>
          <ProjectCard />
        </Col>
        <Col md={3}>
          <ProjectCard />
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
