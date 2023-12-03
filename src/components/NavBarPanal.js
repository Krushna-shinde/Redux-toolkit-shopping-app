import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Container, NavbarCollapse, NavbarText } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartProducts = useSelector(state=>state.cart)
  const navLinkStyle = {
    fontSize: "60px",      // Increase font size
    padding: "20px 20px 0",  // Adjust padding as needed
  };

  const reduxStyle = {
    fontSize: "80px",      // Increase font size
    padding: "10px 20px",  // Adjust padding as needed
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={reduxStyle}>Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link} style={navLinkStyle}>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link} style={navLinkStyle}>My Bag {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
