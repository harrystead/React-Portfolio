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
            <a href="https://docs.google.com/document/d/1UUzTMyiTXZG_Ljtg5bKZS80TEP703D599g6H0Dc4EtQ/edit?usp=sharing" className="nav-link">CV</a>
          </Nav>
      </Navbar>
    );
};

export default NavHeader;
