import { ADD_TO_CART, GET_MENU, REMOVE_FROM_CART } from "../actionTypes";
import Api from "../../Api";
import { toast } from "react-toastify";

export const getMenu = ({
  name = "",
  type = "",
  deliveryType = "",
  rating = "",
}) => {
  return async (dispatch) => {
    try {
      const response = await Api.get("menu", {
        name,
        type,
        deliveryType,
        rating,
      });
      if (response.status === 200) {
        dispatch({ type: GET_MENU, payload: response.menu });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};
