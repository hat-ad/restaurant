import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addToCart, removeFromCart } from "../../Redux/Actions";
import { useEffect } from "react";
const FoodCard = ({ details }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    setCartItem(cart.find((ele) => ele.id === details?.id));
  }, [cart]);

  const addItemToCart = (menuitem) => {
    const cartLoc = cart.findIndex((ele) => ele.id === menuitem.id);
    let payload = [];

    if (cartLoc >= 0) {
      cart[cartLoc].count = cart[cartLoc].count + 1;
      payload = cart;
    } else {
      menuitem.count = 1;
      payload = [...cart, menuitem];
    }

    dispatch(addToCart(payload));
  };

  const removeItemFromCart = (menuitem) => {
    const cartLoc = cart.findIndex((ele) => ele.id === menuitem.id);
    let payload = [];

    // if more than one element left in cart just decrease quantity
    if (cart[cartLoc].count > 1) {
      cart[cartLoc].count = cart[cartLoc].count - 1;
      payload = cart;
    }
    // if 1 element left in cart remove it from cart
    else {
      payload = cart.filter((ele) => ele.id !== menuitem.id);
    }
    dispatch(removeFromCart(payload));
  };

  return (
    <div
      className="
    product-layout product-grid
    col-lg-4 col-md-4 col-sm-6 col-6 
  "
    >
      <div className="product-thumb product-shadow ">
        <div className="image">
          <img
            src={details?.img}
            alt="Food"
            title="Food image"
            className="img-fluid"
          />
        </div>
        <div className="caption">
          <h4>{details?.title}</h4>
          {!cartItem?.count ? (
            <button
              className="add-to-cart"
              onClick={() => addItemToCart(details)}
            >
              Add to cart
            </button>
          ) : (
            <div className="cart-quantity">
              <button
                onClick={() => cartItem?.count && removeItemFromCart(details)}
              >
                <i className="fas fa-minus"></i>
              </button>
              <span>{cartItem?.count}</span>
              <button onClick={() => addItemToCart(details)}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          )}
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="price">${details?.price}</div>
          <p className="des">Cursus / Dictum / Risus</p>
          <p>{details?.description}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
