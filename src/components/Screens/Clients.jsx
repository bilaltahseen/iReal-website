import React from "react"
import { Container } from "react-bootstrap"
import ClientCoursal from "../Elements/ClientCoursal"

const Clients = ({ id }) => {
  return (
    <Container id={id} className="clients-comp text-center" fluid>
      <h2>Our Clients</h2>
      <p className="text-muted">Meet our happy clients</p>

      <ClientCoursal />
    </Container>
  )
}

export default Clients
