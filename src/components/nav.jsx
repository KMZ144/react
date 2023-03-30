import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/products' className='nav-link'>Products</NavLink>
                <NavLink to='/task1' className='nav-link'>Task1</NavLink>
                <NavLink to='/task2' className='nav-link'>Task2</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
