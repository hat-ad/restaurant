import React from "react";

import { ratingGenerator } from "../../common/utility";

const CartItem = ({
  details,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeCartItem,
}) => {
  const ratings = ratingGenerator(details?.rating);
  return (
    <li className=" row pr-2 pl-2 border mb-1">
      <div className="cart col-7">
        <h3>
          {details?.name} <span className="pl-1">${details?.price}</span>
        </h3>
        <p>Ref. {details?._id}</p>
        <div className="rating mb-3">
          {ratings.map((item, index) => (
            <i className={`${item} fa-star`} key={index}></i>
          ))}
        </div>
        <div className="cart-quantity d-none  d-lg-block d-xl-block">
          <button onClick={decreaseCartQuantity}>
            <i className="fas fa-minus"></i>
          </button>
          <span>{details?.count}</span>
          <button onClick={increaseCartQuantity}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <button
          className="add-to-cart d-lg-none d-xl-none"
          onClick={removeCartItem}
        >
          <i className="fas fa-trash-alt mr-1"></i> Remove
        </button>
      </div>
      <div className=" cart col-5 d-flex align-items-center">
        <div className="row justify-content-center">
          <img
            src={details?.img}
            alt="food"
            className="img-fluid mb-2"
            style={{ maxHeight: "13rem" }}
          />
          <div className="d-none d-xl-flex d-lg-flex align-items-center cart-remove ml-1 ">
            <button className="add-to-cart" onClick={removeCartItem}>
              <i className="fas fa-trash-alt mr-1"></i> Remove
            </button>
          </div>
          <div className="cart-quantity d-lg-none d-xl-none">
            <button onClick={decreaseCartQuantity}>
              <i className="fas fa-minus"></i>
            </button>
            <span>{details?.count}</span>
            <button onClick={increaseCartQuantity}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
