import React,{useState} from 'react'
import {Carousel,Row,Col} from 'react-bootstrap'
import ClientCard from './ClientCard';
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
const ClientCoursal = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
  

    return (
        <div>
            <Carousel nextIcon={<IoIosArrowForward color='#000' size='2rem'/>} prevIcon={<IoIosArrowBack color='#000' size='2rem'/>}  controls  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <Row>
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                
                
             </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                
                
             </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                 <Col md={3} xs={3} >
                 <ClientCard/>
                 </Col >
                
                
             </Row>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default ClientCoursal
