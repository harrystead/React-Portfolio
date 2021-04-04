import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="container-footer">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#">email: harrystead9@gmail.com</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Footer;
