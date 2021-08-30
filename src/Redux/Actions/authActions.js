import { AUTH_USER, AUTH_USER_COMPLETE, LOGOUT_USER } from "../actionTypes";
import Api from "../../Api";
import { toast } from "react-toastify";

export const loginUser = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      const response = await Api.postOAuth("login", data);
      console.log(response);
      if (response.status === 200) {
        dispatch({ type: AUTH_USER, payload: response.details });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went wrong");
    }
    dispatch({ type: AUTH_USER_COMPLETE });
  };
};

export const loginThirdparty = (data) => {
  return {
    type: AUTH_USER,
    payload: data,
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: LOGOUT_USER,
  };
};
