import React, { useState } from "react";
import loginManager from "../../managers/loginManager";
import { COOKIES } from "../../constants/constants";
// import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
  return COOKIES.get("access_token") === null;
}

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogIn());
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    const response = await loginManager(data);
    if (response.ok) {
      alert("logged in");
      const token = await response.json();
      console.log("TOKEN", token);
      // sessionStorage.setItem("token", token);
      setIsLoggedIn();
      COOKIES.set("access_token", token.access_token);
      navigate('/profile')
      console.log("finished")

    } else {
      console.log("login failed");
    }
  };

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
                    name="userid"
                    onChange={handleUsername}
                  />
                </Col>
                <Col xs="auto">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className=" mr-sm-2"
                    name="password"
                    onChange={handlePassword}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" onClick={handleSubmit}>
                    Login
                  </Button>
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
