import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import ClientCard from '../Elements/ClientCard'
import ClientCoursal from '../Elements/ClientCoursal'

const Clients = () => {
    return (
        <Container className='clients-comp text-center' fluid>
             <h2 >Our Clients</h2>
             <p className='text-muted'>Meet our happy clients</p>
             
             <ClientCoursal/>
        </Container>
    )
}

export default Clients
