import React from "react";
import {
  food01,
  food02,
  food03,
  food04,
  food05,
  food06,
  food07,
  food08,
  food09,
} from "../../Assets/imageDir";

const OrderPage = () => {
  return (
    <div className="wrapper">
      {/* <!-- Shop Start --> */}
      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {/* <!-- Left Filter Start --> */}
              <div className="left-side">
                <h4>SEARCH FILTERS</h4>
                <div className="search">
                  {/* <!-- Search Filter Start --> */}
                  <form className="form-horizontal" method="post">
                    <fieldset>
                      <div className="form-group">
                        <input
                          name="s"
                          value=""
                          className="form-control"
                          placeholder="Search Food"
                          type="text"
                        />
                        <button type="submit" value="submit" className="btn">
                          <i className="icofont icofont-search"></i>
                        </button>
                      </div>
                      <ul className="list-unstyled">
                        <li>
                          <label className="check">
                            <input
                              type="radio"
                              name="payment"
                              className="checkclassName"
                            />
                            Vegetarian
                          </label>
                        </li>

                        <li>
                          <label className="check">
                            <input
                              type="radio"
                              name="payment"
                              className="checkclassName"
                            />
                            Non Veg
                          </label>
                        </li>
                      </ul>
                    </fieldset>
                  </form>
                  {/* <!-- Search Filter End --> */}
                </div>
                <div className="food">
                  <h3>Food For</h3>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <label className="check">
                        <input
                          type="radio"
                          name="payment"
                          className="checkclassName"
                        />
                        Delivery
                      </label>
                    </li>
                    <li className="list-inline-item">
                      <label className="check">
                        <input
                          type="radio"
                          name="payment"
                          className="checkclassName"
                        />
                        Pickup
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="rating">
                  {/* <!-- Rating Filter Start --> */}
                  <h3>Rating</h3>
                  <ul className="list-unstyled">
                    <li>
                      <label className="check">
                        <input
                          type="radio"
                          name="payment"
                          className="checkclassName"
                        />
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </label>
                    </li>
                    <li>
                      <label className="check">
                        <input
                          type="radio"
                          name="payment"
                          className="checkclassName"
                        />
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </label>
                    </li>
                    <li>
                      <label className="check">
                        <input
                          type="radio"
                          name="payment"
                          className="checkclassName"
                        />
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </label>
                    </li>
                    <li>
                      <label className="check">
                        <input
                          type="radio"
                          name="payment"
                          className="checkclassName"
                        />
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </label>
                    </li>
                    <li>
                      <label className="check">
                        <input
                          type="radio"
                          name="payment"
                          className="checkclassName"
                        />
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </label>
                    </li>
                  </ul>
                  {/* <!-- Rating Filter End --> */}
                </div>
              </div>
              {/* <!-- Left Filter End --> */}
            </div>
            <div className="col-md-9 mainpage">
              {/* <!-- Product View Start --> */}

              <div className="form-row">
                {/* <!-- Product List Start --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food01}
                          alt="Food"
                          title="Food image"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Product End --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food02}
                          alt="Food"
                          title="Food image"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Product End --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food03}
                          alt="Food"
                          title="Food image"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Product End --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food04}
                          alt="Food"
                          title="Food"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Product End --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food05}
                          alt="Food"
                          title="Food image"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Product End --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food06}
                          alt="Food"
                          title="Food image"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Product End --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food07}
                          alt="Food"
                          title="Food image"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Product End --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food08}
                          alt="Food"
                          title="Food image"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Single Product End --> */}
                {/* <!-- Single Product Start --> */}
                <div
                  className="
                product-layout product-grid
                col-lg-4 col-md-4 col-sm-6 col-12
              "
                >
                  <div className="product-thumb">
                    <div className="image">
                      <a
                        className="link"
                        href="https://www.spheretheme.com/html/steam/shop-details.html"
                      >
                        <img
                          src={food09}
                          alt="Food"
                          title="Food image"
                          className="img-fluid"
                        />
                      </a>
                      <div className="hoverbox">
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                    <div className="caption">
                      <h4>Food Title Here</h4>
                      <div className="rating">
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                        <i className="icofont icofont-star"></i>
                      </div>
                      <div className="price">$23.00</div>
                      <p className="des">Cursus / Dictum / Risus</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas non eleifend erat, vitae aliquam metus. Donec
                        orci tellus, rhoncus eget ipsum tempus, dignissim rutrum
                        enim. Integer interdum sapien nec tempus luctus.
                      </p>
                      <p>
                        <a
                          className="btn btn-theme btn-md"
                          href="https://www.spheretheme.com/html/steam/shopping-cart.html"
                        >
                          Add To Cart
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Single Product End  */}
                {/*  Product List End  */}
              </div>
              {/* Product View End  */}
            </div>
          </div>
        </div>
      </div>
      {/* Shop End  */}
    </div>
  );
};

export default OrderPage;
