import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            style={{ height: "25px", borderRadius: "2px" }}
            src="https://i.postimg.cc/MT8ZY9gv/news.jpg"
            alt=""
          />
          <Navbar.Brand href="#">DailyNews</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "400px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="active">
                Top Headlines
              </Nav.Link>
              <Nav.Link href="#action2">World</Nav.Link>
              <Nav.Link href="#action3">Bussiness</Nav.Link>
              <Nav.Link href="#action4">Entertainment</Nav.Link>
              <Nav.Link href="#action5">Food</Nav.Link>
              <Nav.Link href="#action6">Health</Nav.Link>
              <Nav.Link href="#action7">Politics</Nav.Link>
              <Nav.Link href="#action8">Science</Nav.Link>
              <Nav.Link href="#action9">Sports</Nav.Link>
              <Nav.Link href="#action10">Technology</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search content"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
