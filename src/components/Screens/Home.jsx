import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Image from '../image'

export const Home = () => {
    return (
        <Container className='home'>
            <Row>
            <Col  md={{span:'6',offset:'0'}}>
                
                <p className='h2 hero-text1'>
                        Take your Business
                        to the next level
                    </p>
                    <p className='hero-text2'>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    </p>
                </Col>
                <Col className='text-right' md={{span:'6',offset:'0'}} >
                   <img width={400} src='undraw_Powerful_re_frhr.svg'></img>
                </Col>
                
            </Row>
        </Container>
    )
}