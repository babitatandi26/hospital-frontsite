import React from "react";
import "./Navbar.css";
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
  NavLink,
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
              <NavLink  href="/" style={{color:"#118574"}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/appointment">Appointments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/events">Events</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               About Us
              </DropdownToggle>
              <DropdownMenu bottom>
                <DropdownItem>
                  <NavLink  href="/about-us">About Hospitals</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink  href="/vision-mission">Vision and Mission</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink  href="/doctors">Meet our Doctors</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink  href="/faq">FAQ's</NavLink>
                </DropdownItem>
                <DropdownItem>
                 <NavLink  href="/departments">Departments</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink  href="/testimonials">Testimonials</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink  href="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/contact-us">Contact Us</NavLink>
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
