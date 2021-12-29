import React from "react";
import "./style.css";
import { ratingGenerator } from "../../common/utility";
const FilterComponent = ({
  onClose,
  className,
  onSearch,
  onSelectType,
  onSelectDelivery,
  onChangeRating,
}) => {
  return (
    <div className={`col-md-3 filter-div ${className}`}>
      <div className="left-side">
        <div className="heading d-flex justify-content-between  align-items-center">
          <h4 className="">FILTERS</h4>

          <button className="d-md-none  close-ico" onClick={onClose}>
            <i
              className="fas fa-window-close "
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </button>
        </div>
        <div className="search">
          <div className="form-horizontal">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Search Food"
                  type="text"
                  style={{ color: "black" }}
                  onChange={onSearch}
                />
              </div>
              <ul className="list-unstyled">
                <li>
                  <label className="check">
                    <input
                      type="radio"
                      name="payment"
                      className="checkclassName"
                      value="veg"
                      onChange={onSelectType}
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
                      value="non-veg"
                      onChange={onSelectType}
                    />
                    Non Veg
                  </label>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="food">
          <h3>Food For</h3>
          <form>
            <ul className="list-inline">
              <li className="list-inline-item">
                <label className="check">
                  <input
                    type="radio"
                    name="payment"
                    className="checkclassName"
                    value="delivery"
                    onChange={onSelectDelivery}
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
                    value="pickup"
                    onChange={onSelectDelivery}
                  />
                  Pickup
                </label>
              </li>
            </ul>
          </form>
        </div>
        <div className="rating">
          <h3>Rating</h3>
          <ul className="list-unstyled">
            {[5, 4, 3, 2, 1].map((rating, idx) => (
              <li key={idx}>
                <label className="check">
                  <input
                    type="radio"
                    name="payment"
                    className="checkclassName"
                    value={rating}
                    onChange={onChangeRating}
                  />
                  {ratingGenerator(rating).map((ratingClass, index) => (
                    <i className={`${ratingClass} fa-star`} key={index}></i>
                  ))}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
