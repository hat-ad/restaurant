import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { SignIn, SignUp } from "../index";
import { klassLogo } from "../../Assets/imageDir";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { logout } from "../../Redux/Actions/authActions";
import { Link } from "react-router-dom";

const Header = () => {
  const authDetails = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showSignIn, handleShowSignIn] = useState(false);
  const [showSignUp, handleShowSignUp] = useState(false);
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        {/* <Container> */}
        <Navbar.Brand href="/">
          <img src={klassLogo} align="klassy cafe html template" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#top" className="nav-links">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-links">
              About
            </Nav.Link>
            <Link to="/items" className="nav-links nav-link">
              Menu
            </Link>
            <Nav.Link href="#chefs" className="nav-links">
              Chefs
            </Nav.Link>
            <Nav.Link href="#reservation" className="nav-links">
              Contact Us
            </Nav.Link>
            <Link to="/cart" className="nav-links nav-link">
              Cart
            </Link>
            {!authDetails.authDetails ? (
              <>
                <div className="d-flex ml-5">
                  <li className="scroll-to-section mr-3">
                    <button onClick={() => handleShowSignIn(!showSignIn)}>
                      Sign In
                    </button>
                  </li>
                  <li className="scroll-to-section">
                    <button onClick={() => handleShowSignUp(!showSignUp)}>
                      Sign Up
                    </button>
                  </li>
                </div>
              </>
            ) : (
              <NavDropdown
                title={"Welcome," + authDetails?.authDetails?.firstName}
                id="basic-nav-dropdown ml-5"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </NavDropdown.Item>
                {/* <Link to="/cart" className="dropdown-item">
                  Cart
                </Link> */}
                {/* <NavDropdown.Item href="#action/3.4">Cart</NavDropdown.Item> */}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
      <SignIn
        show={showSignIn}
        handleClose={() => handleShowSignIn(false)}
        showSignUp={() => {
          handleShowSignIn(false);
          handleShowSignUp(true);
        }}
      />
      <SignUp
        show={showSignUp}
        handleClose={() => handleShowSignUp(false)}
        showSignIn={() => {
          handleShowSignIn(true);
          handleShowSignUp(false);
        }}
      />
    </>
  );
};

export default Header;
