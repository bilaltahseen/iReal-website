import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import ClientCard from '../Elements/ClientCard'

const Clients = () => {
    return (
        <Container className='clients-comp text-center' fluid>
             <h2 >Our Clients</h2>
             <p className='text-muted'>Meet our happy clients</p>
             <Row>
                 <Col md={3} xs={4} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={4} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={4} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={4} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={4} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={4} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={4} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={4} >
                 <ClientCard/>
                 </Col >
             </Row>
        </Container>
    )
}

export default Clients
