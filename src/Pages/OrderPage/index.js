import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FilterComponent, FoodCard, Footer, Header } from "../../Components";
import "./style.css";

const OrderPage = () => {
  const [isShowing, setShow] = useState(false);
  const [showOtherComponent, setShowOtherComponent] = useState({
    show: false,
    component: "filter",
  });
  useEffect(() => {
    if (window.screen.width > 767) setShow(true);
  }, []);

  const MobileViewComponent = () => (
    <div className="col-md-9 mainpage">
      {showOtherComponent.show ? (
        showOtherComponent.component === "filter" ? (
          <FilterComponent
            onClose={() =>
              setShowOtherComponent({
                show: false,
                component: "filter",
              })
            }
          />
        ) : null
      ) : (
        <div className="form-row">
          <FoodCard details={{}} />
        </div>
      )}
    </div>
  );

  return (
    <>
      <Header />
      <div className="wrapper mt-5">
        <div className="shop">
          <div className="container">
            {!isShowing && (
              <div className="d-flex justify-content-between mb-3 mt-3 ">
                <Button
                  className="pr-5 pl-5 outline"
                  onClick={() => {
                    console.log("i was clicked");
                    setShowOtherComponent({
                      show: !showOtherComponent.show,
                      component: "filter",
                    });
                  }}
                >
                  <i className="fas fa-filter mr-1"></i>Filter
                </Button>
                <Button className="pr-5 pl-5 ">
                  <i className="fas fa-shopping-cart mr-1"></i>Cart
                </Button>
              </div>
            )}
            <div className="row">
              <FilterComponent className="d-none d-lg-block d-xl-block d-md-block " />
              <MobileViewComponent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
