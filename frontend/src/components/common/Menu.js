import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="py-2 ">
        <Navbar.Brand>
          <h2>Notes</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/archive" className="nav-item nav-link">
              Archived notes
            </NavLink>
            <NavLink to="/createNote" className="nav-item nav-link linkNewNote">
              Create new note
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
