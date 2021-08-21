import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { SignIn, SignUp } from "../index";
import { klassLogo } from "../../Assets/imageDir";

const Header = () => {
  const [showSignIn, handleShowSignIn] = useState(false);
  const [showSignUp, handleShowSignUp] = useState(false);
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" className="logo">
                  <img
                    src={klassLogo}
                    align="klassy cafe html template"
                    alt="logo"
                  />
                </a>
                {/* <!-- ***** Logo End ***** -->
                  <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>

                  <li className="scroll-to-section">
                    <a href="#menu">Menu</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#chefs">Chefs</a>
                  </li>
                  {/* <li className="submenu">
              <a href="">Features</a>
              <ul>
                <li>
                  <a href="#">Features Page 1</a>
                </li>
                <li>
                  <a href="#">Features Page 2</a>
                </li>
                <li>
                  <a href="#">Features Page 3</a>
                </li>
                <li>
                  <a href="#">Features Page 4</a>
                </li>
              </ul>
            </li>
           */}
                  <li className="scroll-to-section">
                    <a href="#reservation">Contact Us</a>
                  </li>
                  <li className="scroll-to-section">
                    <Button onClick={() => handleShowSignIn(!showSignIn)}>
                      Sign In
                    </Button>
                  </li>
                  <li className="scroll-to-section">
                    <Button onClick={() => handleShowSignUp(!showSignUp)}>
                      Sign Up
                    </Button>
                  </li>
                </ul>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
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
