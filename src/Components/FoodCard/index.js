import React, { useState } from "react";
import "./style.css";

const FoodCard = ({ title, price, img, description }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  return (
    <div
      className="
    product-layout product-grid
    col-lg-4 col-md-4 col-sm-6 col-6 
  "
    >
      <div className="product-thumb product-shadow ">
        <div className="image">
          <img src={img} alt="Food" title="Food image" className="img-fluid" />
        </div>
        <div className="caption">
          <h4>{title}</h4>
          {!cartQuantity ? (
            <button className="add-to-cart" onClick={() => setCartQuantity(1)}>
              Add to cart
            </button>
          ) : (
            <div className="cart-quantity">
              <button
                onClick={() =>
                  cartQuantity && setCartQuantity(cartQuantity - 1)
                }
              >
                <i className="fas fa-minus"></i>
              </button>
              <span>{cartQuantity}</span>
              <button onClick={() => setCartQuantity(cartQuantity + 1)}>
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
          <div className="price">${price}</div>
          <p className="des">Cursus / Dictum / Risus</p>
          <p>{description}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
