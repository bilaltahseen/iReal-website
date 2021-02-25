import React, { useState, useRef, useEffect } from "react"
import { Carousel, Row, Col } from "react-bootstrap"
import ClientCard from "./ClientCard"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

const ClientCoursal = () => {
  const [index, setIndex] = useState(0)
  const carouselRef = useRef(null)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  useEffect(() => {
    console.log(carouselRef.current)
    carouselRef.current.element.childNodes[2].href = ""
    carouselRef.current.element.childNodes[3].href = ""
  }, [])
  return (
    <div>
      <Carousel
        ref={carouselRef}
        nextIcon={<IoIosArrowForward color="#000" size="2rem" />}
        prevIcon={<IoIosArrowBack color="#000" size="2rem" />}
        controls
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Row>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
            <Col md={3} xs={3}>
              <ClientCard />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ClientCoursal
