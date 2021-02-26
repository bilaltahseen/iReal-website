import React from "react"
import { Container } from "react-bootstrap"
import Image from "../image"

const ProjectCard = () => {
  return (
    <div className="project-card my-2">
      <Image imgsrc="undraw_contact_us_15o2.png" />
      <div className="p-2">
        <p className="my-auto">Project Name</p>
      </div>
    </div>
  )
}

export default ProjectCard
