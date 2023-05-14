import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import cover from "./../Pictures/cover.png";
import { Link } from "react-router-dom";
const NavElemetSection = () => {
  return (
    <div>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand as={Link}  to="/">
              <img src={cover} alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Planto
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="plants">Plant</Nav.Link>
                  <Nav.Link href="#action2">Shops</Nav.Link>
                  <Nav.Link href="#action1">Blogs</Nav.Link>
                  <Nav.Link href="#action2">Videos</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavElemetSection;
