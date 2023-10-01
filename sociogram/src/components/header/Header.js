import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  Button,
  Image,
  Dropdown,
} from "react-bootstrap";

import "./Header.css";

function isLogIn() {
  return sessionStorage.getItem("user") === null;
}

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogIn());

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">SocioGram</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="me-auto">
          <Form.Control type="text" placeholder="Search" />
        </Form>
        <Nav className="me-auto">{/* Nav links */}</Nav>
        {isLoggedIn ? (
          <Nav>
            {/* <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <Col xs={6} md={4}>
                  <Image width="25" src="logo192.png" roundedCircle />
                </Col>
              </Dropdown.Toggle>
              <div>
                <Dropdown.Menu style={{ direction: "right" }}>
                  <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </div>
            </Dropdown> */}

            {/* <Col xs={6} md={4}>
              <Image width="35" src="logo192.png" roundedCircle />
            </Col> */}
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="User ID"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Login</Button>
                </Col>
              </Row>
            </Form>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;