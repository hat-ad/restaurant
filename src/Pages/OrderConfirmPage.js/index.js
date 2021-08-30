import React from "react";
import { Footer, Header } from "../../Components";
import CartItem from "../../Components/CartItem";
import "./style.scss";

const OrderConfirmPage = () => {
  return (
    <>
      <Header />
      <div className="wrap cf">
        <h1 className="projTitle">
          Responsive Table<span>-Less</span> Shopping Cart
        </h1>
        <div className="headingOrder cf">
          <h1>My Cart</h1>
          <a href="/#" className="continue">
            Continue Shopping
          </a>
        </div>
        <div className="cart">
          <ul className="cartWrap">
            <CartItem />
          </ul>
        </div>

        <div className="promoCode">
          <label htmlFor="promo">Have A Promo Code?</label>
          <input type="text" name="promo" placholder="Enter Code" />
          <a href="/#" className="btn">
            {" "}
          </a>
        </div>

        <div className="subtotal cf">
          <ul>
            <li className="totalRow">
              <span className="label">Subtotal</span>
              <span className="value">$35.00</span>
            </li>

            <li className="totalRow">
              <span className="label">Shipping</span>
              <span className="value">$5.00</span>
            </li>

            <li className="totalRow">
              <span className="label">Tax</span>
              <span className="value">$4.00</span>
            </li>
            <li className="totalRow final">
              <span className="label">Total</span>
              <span className="value">$44.00</span>
            </li>
            <li className="totalRow">
              <a href="/#" className="btn continue">
                Checkout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmPage;
