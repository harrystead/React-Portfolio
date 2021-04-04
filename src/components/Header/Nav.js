import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";

const NavHeader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Harry J. Stead</Navbar.Brand>
        <Navbar />
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
          </Nav>
      </Navbar>
    );
};

export default NavHeader;
