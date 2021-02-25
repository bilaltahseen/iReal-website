import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { DiReact, DiAndroid, DiPython } from "react-icons/di"
import { CgWebsite } from "react-icons/cg"
import CardComp from "../Elements/CardComp"
import {
  SiReact,
  SiAngularjs,
  SiAndroidstudio,
  SiPython,
  SiNodeDotJs,
  SiGatsby,
} from "react-icons/si"
const Expertiese = ({ id }) => {
  return (
    <Container id={id} className="bg-white p-5 text-center" fluid>
      <h2>Find out our broad range of services</h2>
      <br></br>
      <center>
        <div className="d-flex justify-content-between w-50">
          <DiReact className="mx-md-2 mx-1" color="#6B7A89" size="3em" />
          <CgWebsite className="mx-md-2 mx-1" color="#6B7A89" size="3em" />
          <DiAndroid className="mx-md-2 mx-1" color="#6B7A89" size="3em" />
          <DiPython className="mx-md-2 mx-1" color="#6B7A89" size="3em" />
        </div>
      </center>

      <center>
        <Row style={{ marginTop: 10, padding: 20 }}>
          <Col md={4}>
            <CardComp
              exp_name={"MERN Stack Web Development"}
              exp_details={
                "MERN includes four open-source components: MongoDB, Express, React, and Node. js."
              }
              exp_logo={<SiReact size="2em" />}
            />
          </Col>
          <Col md={4}>
            <CardComp
              exp_name={"MEAN Stack Web Development"}
              exp_details={
                "MEAN is a free and open-source JavaScript software stack for building dynamic web sites and web applications."
              }
              exp_logo={<SiAngularjs size="2em" />}
            />
          </Col>
          <Col md={4}>
            <CardComp
              exp_name={"Node Js Backend"}
              exp_details={
                "Open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. "
              }
              exp_logo={<SiNodeDotJs size="2em" />}
            />
          </Col>
          <Col md={4}>
            <CardComp
              exp_name={"JAM Stack Web Development"}
              exp_details={
                "Jamstack is the new standard architecture for the web. Using Git workflows and modern build tools, pre-rendered content is served to a CDN"
              }
              exp_logo={<SiGatsby size="2em" />}
            />
          </Col>
          <Col md={4}>
            <CardComp
              exp_name={"Android Apps Development"}
              exp_details={
                "Android software development is the process by which applications are created for devices running the Android operating system."
              }
              exp_logo={<SiAndroidstudio size="2em" />}
            />
          </Col>
          <Col md={4}>
            <CardComp
              exp_name={"Python Apps Development"}
              exp_details={
                "Python is an interpreted, high-level and general-purpose programming language."
              }
              exp_logo={<SiPython size="2em" />}
            />
          </Col>
        </Row>
      </center>
    </Container>
  )
}

export default Expertiese
