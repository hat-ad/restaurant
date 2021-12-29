import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FilterComponent, FoodCard, Footer, Header } from "../../Components";
import { getMenu } from "../../Redux/Actions";
import "./style.css";

const OrderPage = () => {
  const [isShowing, setShow] = useState(false);
  const [showOtherComponent, setShowOtherComponent] = useState({
    show: false,
    component: "filter",
  });
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    deliveryType: "",
    rating: "",
  });

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.screen.width > 767) setShow(true);
    dispatch(getMenu({}));
  }, []);

  const onChangeRating = (e) => {
    setFilters({ ...filters, rating: e.target.value });
    dispatch(getMenu({ ...filters, rating: e.target.value }));
  };

  const onSelectDelivery = (e) => {
    setFilters({ ...filters, deliveryType: e.target.value });
    dispatch(getMenu({ ...filters, deliveryType: e.target.value }));
  };

  const onSelectType = (e) => {
    setFilters({ ...filters, type: e.target.value });
    dispatch(getMenu({ ...filters, type: e.target.value }));
  };

  const onSearch = (e) => {
    setFilters({ ...filters, name: e.target.value });
    dispatch(getMenu({ ...filters, name: e.target.value }));
  };

  return (
    <>
      <Header />
      <div className="wrapper mt-5">
        <div className="shop">
          <div className="container">
            {!isShowing && (
              <div className="d-flex justify-content-between mb-3 mt-3 ">
                <Button
                  // className="pr-5 pl-5 outline"
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
                <Button
                //  className="pr-5 pl-5 "
                >
                  <i className="fas fa-shopping-cart mr-1"></i>Cart
                </Button>
              </div>
            )}
            <div className="row">
              <FilterComponent
                className="d-none d-lg-block d-xl-block d-md-block "
                onClose={() =>
                  setShowOtherComponent({
                    show: false,
                    component: "filter",
                  })
                }
                onChangeRating={onChangeRating}
                onSearch={onSearch}
                onSelectDelivery={onSelectDelivery}
                onSelectType={onSelectType}
                filters={filters}
              />
              <div className="col-md-9 mainpage">
                {showOtherComponent.show ? (
                  showOtherComponent.component === "filter" && (
                    <FilterComponent
                      onClose={() =>
                        setShowOtherComponent({
                          show: false,
                          component: "filter",
                        })
                      }
                      onChangeRating={onChangeRating}
                      onSearch={onSearch}
                      onSelectDelivery={onSelectDelivery}
                      onSelectType={onSelectType}
                      filters={filters}
                    />
                  )
                ) : (
                  <div className="form-row">
                    {cart.menu.map((item) => (
                      <FoodCard details={item} key={item.id} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
