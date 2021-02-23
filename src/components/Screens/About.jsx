import React from "react"
import { Container } from "react-bootstrap"
const About = () => {
  return (
    <div>
      <Container className="bg-white" fluid>
        <h2 className="text-center p-3">About Us</h2>
        <div className="bg-white container-fluid">
          <div className="row">
            <div className="col-md-7 p-md-4">
              <div className="mb-md-1 ml-md-5">
                <div className="line ml-md-4 mt-md-3 mb-md-1"></div>
                <p className="ml-md-4">
                  <strong>WHO WE ARE</strong>
                </p>
              </div>
            </div>
            <div className="col-md-5 p-md-5">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi ipsum sapiente assumenda culpa. Repudiandae aliquam,
                quae praesentium exercitationem natus officia?
              </p>
            </div>
          </div>
          <div className="secondRow row p-3">
            <div className="col-md-7 pl-md-4">
              <img
                src="undraw_team_spirit_hrr4.svg"
                className="h-auto w-75 img-fluid mb-5 full-width"
              />
              <div className="mb-md-5 ml-md-5"></div>
            </div>
            <div className="col-md-5 p-md-5 mt-md-5">
              <p>
                <strong>OUR PEOPLE COME FIRST!</strong>
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi ipsum sapiente assumenda culpa. Repudiandae aliquam,
                quae praesentium exercitationem natus officia?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Optio quia libero aut
                quasi obcaecati, repellat sapiente iusto assumenda, vitae vel
                quaerat iure asperiores accusamus perferendis natus sint maiores
                laborum ipsa!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
