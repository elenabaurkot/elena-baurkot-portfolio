import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function SiteNav() {
  return (
    <Navbar
      style={{ backgroundColor: "rgba(235, 230, 230, 0.8)" }}
      fixed="top"
      // bg="light"
      expand="lg"
    >
      <Navbar.Brand href="#home">Elena Baurkot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-center" href="#link">
            Portfolio
          </Nav.Link>
          <Nav.Link className="text-center" href="#link">
            About
          </Nav.Link>
          <Nav.Link className="text-center" href="#link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SiteNav;
