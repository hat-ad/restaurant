import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Api from "../../Api";
import { Footer, Header } from "../../Components";
import CartItem from "../../Components/CartItem";
import { addToCart, removeFromCart } from "../../Redux/Actions";
import "./style.scss";

const OrderConfirmPage = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [amountData, setAmountData] = useState({
    subtotal: 0,
    tax: 0,
    total: 0,
    discount: 0,
  });
  const [couponCode, setCouponCode] = useState({
    name: "",
    discount: 0,
    invalidMssg: "",
  });

  const [addressStatus, setAddressStatus] = useState({
    address: "",
    landmark: "",
    status: "change",
  });

  const changeAddress = async () => {
    if (!addressStatus.address || !addressStatus.landmark) {
      toast.error("You need to add all the fields");
      return;
    }
    try {
      const response = await Api.update("address", {
        address: addressStatus.address,
        landmark: addressStatus.landmark,
      });
      if (response.status === 200)
        setAddressStatus({
          address: "",
          landmark: "",
          status: "change",
        });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getAmount();
  }, [cart, couponCode]);

  const getAmount = () => {
    const tempTotal = {
      subtotal: 0,
      tax: 0,
      total: 0,
      discount: 0,
    };

    cart.cart.forEach((item) => {
      tempTotal.subtotal =
        tempTotal.subtotal + parseInt(item.price) * parseInt(item.count);
    });
    cart.cart.forEach((item) => {
      tempTotal.tax = tempTotal.tax + parseInt(item.tax);
    });
    tempTotal.total = tempTotal.subtotal + tempTotal.tax - amountData.discount;
    setAmountData(tempTotal);
  };

  const getDiscount = async (code) => {
    let response = {};
    try {
      response = await Api.get("fetch-coupon/" + couponCode.name);
      setCouponCode({
        name: response.data.name,
        discount: response.data.code,
        invalidMssg: "",
      });
      setAmountData({
        ...amountData,
        discount: parseInt(response.data.amount),
      });
    } catch (error) {
      setCouponCode({
        name: "",
        discount: 0,
        invalidMssg: response.data?.mssg,
      });
    }
  };

  const increaseCartQuantity = (item) => {
    const cartLoc = cart?.cart?.findIndex((ele) => ele._id === item._id);
    let payload = [];

    if (cartLoc >= 0) {
      cart.cart[cartLoc].count = cart?.cart[cartLoc].count + 1;
      payload = cart.cart;
    } else {
      item.count = 1;
      payload = [...cart?.cart, item];
    }

    dispatch(addToCart(payload));
  };

  const decreaseCartQuantity = (item) => {
    const cartLoc = cart.cart.findIndex((ele) => ele._id === item._id);
    let payload = [];

    // if more than one element left in cart just decrease quantity
    if (cart.cart[cartLoc].count > 1) {
      cart.cart[cartLoc].count = cart.cart[cartLoc].count - 1;
      payload = cart.cart;
    }
    // if 1 element left in cart remove it from cart
    else {
      payload = cart.cart.filter((ele) => ele._id !== item._id);
    }
    dispatch(removeFromCart(payload));
  };

  const removeCartItem = (menuItem) => {
    const filteredCart = cart.cart.filter((item) => item._id !== menuItem._id);
    dispatch(removeFromCart(filteredCart));
  };

  const placeOrder = async () => {
    if (!cart.cart.length) {
      toast.info(
        "Your cart is empty! Please fill it up with something delicious"
      );
      return;
    }
    if (!auth.authDetails) {
      toast.error("Please login before placing order");
      return;
    }
    try {
      const response = await Api.post("order", cart.cart);
      console.log(response);
      if (response.status === 200) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <div className="wrap cf ">
        <h1 className="projTitle">My Cart</h1>
        {/* <div className="headingOrder cf"> */}
        {/* <h1>My Cart</h1> */}
        {/* <Link to="/menu" className="continue">
          Continue Shopping
        </Link> */}
        {/* </div> */}
        <div className="cart">
          <ul className="cartWrap">
            {cart.cart.map((item, index) => (
              <CartItem
                key={index}
                details={item}
                increaseCartQuantity={() => increaseCartQuantity(item)}
                decreaseCartQuantity={() => decreaseCartQuantity(item)}
                removeCartItem={() => removeCartItem(item)}
              />
            ))}
            {!cart.cart.length && <h5>You have nothing in your cart</h5>}
          </ul>
        </div>

        <div className="promoCode mr-3">
          <label htmlFor="promo">Have A Promo Code?</label>
          <div className="d-flex">
            <input
              type="text"
              name="promo"
              placholder="Enter Code"
              onChange={(e) =>
                setCouponCode({ ...couponCode, name: e.target.value })
              }
            />
            <Button className="btn" onClick={getDiscount}>
              {" "}
            </Button>
          </div>
          {couponCode.invalidMssg !== "" && (
            <p style={{ color: "red" }}>{couponCode.invalidMssg}</p>
          )}
        </div>

        <Card style={{ minHeight: "auto" }}>
          <Card.Header>Address</Card.Header>
          {addressStatus.status === "change" ? (
            <>
              <Card.Body>498 Circle Drive,Houston,Texas</Card.Body>
              <Card.Body>Landmark: Franks Nursery & Crafts</Card.Body>
            </>
          ) : (
            <Card.Body>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="e.g. 498 Circle Drive,Houston,Texas"
                  value={addressStatus.address}
                  onChange={(e) =>
                    setAddressStatus({
                      ...addressStatus,
                      address: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Landmark
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="e.g. Franks Nursery & Crafts"
                  value={addressStatus.landmark}
                  onChange={(e) =>
                    setAddressStatus({
                      ...addressStatus,
                      landmark: e.target.value,
                    })
                  }
                />
              </div>
            </Card.Body>
          )}
          <Card.Footer>
            <Button
              onClick={() =>
                addressStatus.status === "change"
                  ? setAddressStatus({ ...addressStatus, status: "Add" })
                  : changeAddress()
              }
            >
              {addressStatus.status}
            </Button>
          </Card.Footer>
        </Card>
        <div className="subtotal cf">
          <ul>
            <li className="totalRow">
              <span className="label">Subtotal</span>
              <span className="value">${amountData.subtotal}</span>
            </li>
            <li className="totalRow">
              <span className="label">Tax</span>
              <span className="value">${amountData.tax}</span>
            </li>
            <li className="totalRow">
              <span className="label">Discount</span>
              <span className="value" style={{ color: "green" }}>
                -${amountData.discount}
              </span>
            </li>
            <li className="totalRow final">
              <span className="label">Total</span>
              <span className="value">${amountData.total}</span>
            </li>
            <li className="totalRow">
              <Button onClick={placeOrder}>Checkout</Button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmPage;
