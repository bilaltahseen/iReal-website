import React from "react"
import { Card, Button } from "react-bootstrap"
import {SiReactos} from 'react-icons/si'
const CardComp = () => {
  return (
    <Card style={{ width: "18rem",border:'0px',display:'flex',marginTop:'50px' }}>
      <div className='card-img-custom'>
      <SiReactos size='2em'/>
      </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{opacity:0.6}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  )
}

export default CardComp
