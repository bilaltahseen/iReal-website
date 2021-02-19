import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {Navbar,Nav,NavDropdown, Container} from "react-bootstrap"


const Header = ({ siteTitle }) =>{
  const [changeBG,setChangeBG] = useState(false)
  const _change_nav_color =()=>{
    if(window.scrollY >= 80){
      setChangeBG(true)
    }
    else{
      setChangeBG(false)
    }
  }
  window.addEventListener('scroll', _change_nav_color);
  return(
    
  <Navbar className='nav-transation' collapseOnSelect  expand="sm" bg="transparent"  variant="dark">
  <Container >
  <Navbar.Brand className='font-weight-bold' href="#home">ireal</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ml-auto'>
      <Nav.Link  href="#deets">Home</Nav.Link>
      <Nav.Link  href="#deets">Our Expertise</Nav.Link>
      <Nav.Link  href="#deets">Clients</Nav.Link>
      <Nav.Link  href="#deets">About</Nav.Link>
      <Nav.Link  href="#deets">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
  )
}




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
