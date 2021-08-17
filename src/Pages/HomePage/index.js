import React, { useState } from "react";
import {
  whiteLogo,
  tabIcon01,
  tabIcon02,
  tabIcon03,
  tabItem01,
  tabItem02,
  tabItem03,
  tabItem04,
  tabItem05,
  tabItem06,
  slide01,
  slide02,
  slide03,
  aboutThumb01,
  aboutThumb02,
  aboutThumb03,
  aboutVideobg,
  chefs01,
  chefs02,
  chefs03,
  klassLogo,
} from "../../Assets/imageDir";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { SignUp, SignIn } from "../../Components/";

const Home = () => {
  const [showSignIn, handleShowSignIn] = useState(false);
  const [showSignUp, handleShowSignUp] = useState(false);
  return (
    <>
      {/* ***** Header Area Start ***** */}
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
      {/* ***** Header Area End ***** */}
      {/* ***** Main Banner Area Start ***** */}
      <div id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-content">
                <div className="inner-content">
                  <h4>KlassyCafe</h4>
                  <h6>THE BEST EXPERIENCE</h6>
                  <div className="main-white-button scroll-to-section">
                    <a href="#reservation">Make A Reservation</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="main-banner header-text">
                <div className="Modern-Slider">
                  <Slider
                    dots={true}
                    infinite
                    speed={2000}
                    autoplay
                    autoplaySpeed={2500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    adaptiveHeight
                    fade
                  >
                    {/* <!-- Item --> */}
                    <div className="item">
                      <div className="img-fill">
                        <img src={slide01} alt="" />
                      </div>
                    </div>
                    {/* <!-- // Item -->
                          <!-- Item --> */}
                    <div className="item">
                      <div className="img-fill">
                        <img src={slide02} alt="" />
                      </div>
                    </div>
                    {/* <!-- // Item -->
                          <!-- Item --> */}
                    <div className="item">
                      <div className="img-fill">
                        <img src={slide03} alt="" />
                      </div>
                    </div>
                    {/* <!-- // Item --> */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Main Banner Area End ***** */}
      {/* ***** About Area Starts *****  */}
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h2>We Leave A Delicious Memory For You</h2>
                </div>
                <p>
                  Klassy Cafe is one of the best{" "}
                  <a href="https://templatemo.com/tag/restaurant">
                    restaurant HTML templates
                  </a>{" "}
                  with Bootstrap v4.5.2 CSS framework. You can download and feel
                  free to use this website template layout for your restaurant
                  business. You are allowed to use this template for commercial
                  purposes. <br />
                  <br />
                  You are NOT allowed to redistribute the template ZIP file on
                  any template download website. Please contact us for more
                  information.
                </p>
                <div className="row">
                  <div className="col-4">
                    <img src={aboutThumb01} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={aboutThumb02} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={aboutThumb03} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="right-content">
                <div className="thumb">
                  <a rel="nofollow" href="http://youtube.com">
                    <i className="fa fa-play"></i>
                  </a>
                  <img src={aboutVideobg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** About Area Ends *****  */}
      {/* ***** Menu Area Starts ***** */}
      <section className="section" id="menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>Our Menu</h6>
                <h2>Our selection of cakes with quality taste</h2>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginInline: "5%" }}>
          <div className="col-lg-12">
            <Slider
              slidesToShow={5}
              slidesToScroll={5}
              dots={true}
              infinite
              speed={500}
              autoplay
              autoplaySpeed={2500}
              // fade
            >
              <div className="item">
                <div className="card card1">
                  <div className="price">
                    <h6>$14</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Chocolate Cake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card2">
                  <div className="price">
                    <h6>$22</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Klassy Pancake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card3">
                  <div className="price">
                    <h6>$18</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Tall Klassy Bread</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card4">
                  <div className="price">
                    <h6>$10</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Blueberry CheeseCake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card5">
                  <div className="price">
                    <h6>$8.50</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Klassy Cup Cake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card3">
                  <div className="price">
                    <h6>$7.25</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Klassic Cake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card1">
                  <div className="price">
                    <h6>$14</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Chocolate Cake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card2">
                  <div className="price">
                    <h6>$22</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Klassy Pancake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card3">
                  <div className="price">
                    <h6>$18</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Tall Klassy Bread</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card4">
                  <div className="price">
                    <h6>$10</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Blueberry CheeseCake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card5">
                  <div className="price">
                    <h6>$8.50</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Klassy Cup Cake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card3">
                  <div className="price">
                    <h6>$7.25</h6>
                  </div>
                  <div className="info">
                    <h1 className="title">Klassic Cake</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sedii do eiusmod teme.
                    </p>
                    <div className="main-text-button">
                      <div className="scroll-to-section">
                        <a href="#reservation">
                          Make Reservation <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* ***** Menu Area Ends ***** */}
      {/* ***** Chefs Area Starts ***** */}
      <section className="section" id="chefs">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 text-center">
              <div className="section-heading">
                <h6>Our Chefs</h6>
                <h2>We offer the best ingredients for you</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay"></div>
                  <ul className="social-icons">
                    <li>
                      <a href="https://www.facebook.com/people/Ashis-Das/100054966106416/">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ashis_672/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <img src={chefs01} alt="Chef #1" />
                </div>
                <div className="down-content">
                  <h4>Randy Walker</h4>
                  <span>Pastry Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay"></div>
                  <ul className="social-icons">
                    <li>
                      <a href="https://www.facebook.com/people/Ashis-Das/100054966106416/">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ashis_672/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <img src={chefs02} alt="Chef #2" />
                </div>
                <div className="down-content">
                  <h4>David Martin</h4>
                  <span>Cookie Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay"></div>
                  <ul className="social-icons">
                    <li>
                      <a href="https://www.facebook.com/people/Ashis-Das/100054966106416/">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ashis_672/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <img src={chefs03} alt="Chef #3" />
                </div>
                <div className="down-content">
                  <h4>Peter Perkson</h4>
                  <span>Pancake Chef</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Chefs Area Ends ***** */}
      {/* ***** Reservation Us Area Starts *****  */}
      <section className="section" id="reservation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>
                    Here You Can Make A Reservation Or Just walkin to our cafe
                  </h2>
                </div>
                <p>
                  Donec pretium est orci, non vulputate arcu hendrerit a. Fusce
                  a eleifend riqsie, namei sollicitudin urna diam, sed commodo
                  purus porta ut.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="phone">
                      <i className="fa fa-phone"></i>
                      <h4>Phone Numbers</h4>
                      <span>
                        <span>080-090-0990</span>
                        <br />
                        <span>080-090-0880</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="message">
                      <i className="fa fa-envelope"></i>
                      <h4>Emails</h4>
                      <span>
                        <a href="hello@company.com">hello@company.com</a>
                        <br />
                        <a href="hello@company.com">info@company.com</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Table Reservation</h4>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Your Name*"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="phone"
                          type="text"
                          id="phone"
                          placeholder="Phone Number*"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <select
                          value="number-guests"
                          name="number-guests"
                          id="number-guests"
                        >
                          <option value="number-guests">
                            Number Of Guests
                          </option>
                          <option name="1" id="1">
                            1
                          </option>
                          <option name="2" id="2">
                            2
                          </option>
                          <option name="3" id="3">
                            3
                          </option>
                          <option name="4" id="4">
                            4
                          </option>
                          <option name="5" id="5">
                            5
                          </option>
                          <option name="6" id="6">
                            6
                          </option>
                          <option name="7" id="7">
                            7
                          </option>
                          <option name="8" id="8">
                            8
                          </option>
                          <option name="9" id="9">
                            9
                          </option>
                          <option name="10" id="10">
                            10
                          </option>
                          <option name="11" id="11">
                            11
                          </option>
                          <option name="12" id="12">
                            12
                          </option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <div id="filterDate2">
                        <div
                          className="input-group date"
                          data-date-format="dd/mm/yyyy"
                        >
                          <input
                            name="date"
                            id="date"
                            type="text"
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                          <div className="input-group-addon">
                            <span className="glyphicon glyphicon-th"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <select value="time" name="time" id="time">
                          <option value="time">Time</option>
                          <option name="Breakfast" id="Breakfast">
                            Breakfast
                          </option>
                          <option name="Lunch" id="Lunch">
                            Lunch
                          </option>
                          <option name="Dinner" id="Dinner">
                            Dinner
                          </option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button-icon"
                        >
                          Make A Reservation
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Reservation Area Ends ***** */}

      {/* ***** Menu Area Starts *****  */}
      <section className="section" id="offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 text-center">
              <div className="section-heading">
                <h6>Klassy Week</h6>
                <h2>This Week’s Special Meal Offers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <div className="heading-tabs">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <ul>
                          <li>
                            <a href="#tabs-1">
                              <img src={tabIcon01} alt="" />
                              Breakfast
                            </a>
                          </li>
                          <li>
                            <a href="#tabs-2">
                              <img src={tabIcon02} alt="" />
                              Lunch
                            </a>
                          </li>
                          <li>
                            <a href="#tabs-3">
                              <img src={tabIcon03} alt="" />
                              Dinner
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <section className="tabs-content">
                    <article id="tabs-1">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem01} alt="" />
                                  <h4>Fresh Chicken Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$10.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem02} alt="" />
                                  <h4>Orange Juice</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$8.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabIcon03} alt="" />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$9.90</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem04} alt="" />
                                  <h4>Eggs Omelette</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$6.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem05} alt="" />
                                  <h4>Dollma Pire</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$5.00</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem06} alt="" />
                                  <h4>Omelette & Cheese</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$4.10</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article id="tabs-2">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem04} alt="" />
                                  <h4>Eggs Omelette</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$14</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem05} alt="" />
                                  <h4>Dollma Pire</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$18</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem06} alt="" />
                                  <h4>Omelette & Cheese</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$22</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem01} alt="" />
                                  <h4>Fresh Chicken Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$10</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem02} alt="" />
                                  <h4>Orange Juice</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$20</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem03} alt="" />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$30</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article id="tabs-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem05} alt="" />
                                  <h4>Eggs Omelette</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$14</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabIcon03} alt="" />
                                  <h4>Orange Juice</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$18</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabIcon02} alt="" />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$10</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem06} alt="" />
                                  <h4>Fresh Chicken Salad</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$8.50</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabIcon01} alt="" />
                                  <h4>Dollma Pire</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$9</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src={tabItem04} alt="" />
                                  <h4>Omelette & Cheese</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur koit
                                    adipiscing elit, sed do.
                                  </p>
                                  <div className="price">
                                    <h6>$11</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Chefs Area Ends *****  */}

      {/* ***** Footer Start *****  */}
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
                  Design: TemplateMo
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
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

export default Home;
