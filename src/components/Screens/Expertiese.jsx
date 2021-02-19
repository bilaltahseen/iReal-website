import React from 'react'
import { Container } from 'react-bootstrap'
import {DiReact,DiAndroid,DiPython} from 'react-icons/di'
import {CgWebsite} from 'react-icons/cg'
const Expertiese = () => {
    return (
        <Container className='bg-white p-5 text-center' fluid>
            <h2>Find out our broad range of services</h2>
            <br></br>
            <center>
            <div className='d-flex justify-content-between w-50'>
            <DiReact className='m-2' color='#6B7A89' size='3rem'/>
            <CgWebsite className='m-2' color='#6B7A89' size='3rem'/>
            <DiAndroid className='m-2' color='#6B7A89' size='3rem'/>
            <DiPython className='m-2' color='#6B7A89' size='3rem'/>
            </div>
            </center>
        </Container>
    )
}

export default Expertiese
