import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import logo from "../hospitalImages/logo2.png";
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <> 
    <div className="nav">
      <Navbar color="#fff" light expand="md" className="navBar">
        <div>
        <NavbarBrand href="/" style={{marginLeft:"10px"}}><img src={logo} alt="logo" height="50px" width="60px"/><span style={{color:"#118574",fontSize:"1.8rem",marginLeft:"10px",marginRight:"350px"}}>SMART HOSPITAL</span></NavbarBrand>
        <NavbarToggler onClick={toggle} style={{border:"none",outline:"none"}}/>
        </div>
        <div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navitems" navbar>
            <NavItem>
              <NavLink  style={{color:"#118574",textDecoration:"none"}}  className="links" to="/" style={{color:"#118574",textDecoration:"none"}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  style={{color:"gray",textDecoration:"none"}} className="links" to="/appointment">Appointments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  style={{color:"gray",textDecoration:"none"}} className="links" to="/events">Events</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <NavLink  style={{color:"gray",textDecoration:"none"}} to=""> About Us</NavLink>
              </DropdownToggle>
              <DropdownMenu bottom>
                <DropdownItem>
                  <NavLink style={{color:"gray",textDecoration:"none"}}  to="/about-us">About Hospitals</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink  style={{color:"gray",textDecoration:"none"}} to="/vision-mission">Vision and Mission</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink  style={{color:"gray",textDecoration:"none"}} to="/doctors">Meet our Doctors</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink  style={{color:"gray",textDecoration:"none"}} to="/faq">FAQ's</NavLink>
                </DropdownItem>
                <DropdownItem>
                 <NavLink  style={{color:"gray",textDecoration:"none"}} to="/departments">Departments</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink  style={{color:"gray",textDecoration:"none"}} to="/testimonials">Testimonials</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink  style={{color:"gray",textDecoration:"none"}} className="links" to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  style={{color:"gray",textDecoration:"none"}} className="links" to="/contact-us">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </div>
    </>
  );
}

export default NavBar;
