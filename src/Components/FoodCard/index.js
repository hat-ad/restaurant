import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addToCart, removeFromCart } from "../../Redux/Actions";
import { ratingGenerator } from "../../common/utility";
const FoodCard = ({ details }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartItem = cart.find((ele) => ele._id === details?._id);

  const addItemToCart = (menuitem) => {
    const cartLoc = cart.findIndex((ele) => ele._id === menuitem._id);
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
    const cartLoc = cart.findIndex((ele) => ele._id === menuitem._id);
    let payload = [];

    // if more than one element left in cart just decrease quantity
    if (cart[cartLoc].count > 1) {
      cart[cartLoc].count = cart[cartLoc].count - 1;
      payload = cart;
    }
    // if 1 element left in cart remove it from cart
    else {
      payload = cart.filter((ele) => ele._id !== menuitem._id);
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
      <img
        src={details?.img}
        alt="Food"
        title="Food image"
        className="card-img-top"
      />
      <div className="product-thumb product-shadow ">
        <div className="caption">
          <h4>{details?.name}</h4>
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
            {ratingGenerator(details?.rating).map((item, index) => (
              <i className={`${item} fa-star`} key={index}></i>
            ))}
          </div>
          <div className="price">${details?.price}</div>
          <p className="card-text">Cursus / Dictum / Risus</p>
          <p>{details?.description}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
