import React from "react"
import { Card } from "react-bootstrap"

const CardComp = ({ exp_logo, exp_name, exp_details }) => {
  return (
    <Card
      style={{
        width: "18rem",
        border: "0px",
        display: "flex",
        marginTop: "50px",
      }}
    >
      <div className="card-img-custom">{exp_logo}</div>
      <Card.Body>
        <Card.Title>{exp_name}</Card.Title>
        <Card.Text style={{ opacity: 0.6 }}>{exp_details}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardComp
