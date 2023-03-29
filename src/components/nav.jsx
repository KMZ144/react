import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class MyNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">First App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto text-light">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Products</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
