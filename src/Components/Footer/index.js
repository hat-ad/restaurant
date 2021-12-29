import React from "react";
import { whiteLogo } from "../../Assets/imageDir";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div className="right-text-content">
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/people/Ashis-Das/100054966106416/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ashis-das-ba0b60156/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ashis_672/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="logo">
              <a href="index.html">
                <img src={whiteLogo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="left-text-content">
              <p>
                © Copyright Klassy Cafe Co.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
