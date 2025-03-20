import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartDiagram } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <FontAwesomeIcon
          icon={faChartDiagram}
          className="me-2"
          style={{ color: "#a0af50" }}
        />
        Searching Algorithms
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Algorithms" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Linear_Search">
              Linear Search Algorithm
            </NavDropdown.Item>
            <NavDropdown.Item href="/Binary_Search">
              Binary Search Algorithm
            </NavDropdown.Item>
            <NavDropdown.Item href="/two_pointer">
              Two Pointer Technique
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
