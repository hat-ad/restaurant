import { AUTH_USER, AUTH_USER_COMPLETE, LOGOUT_USER } from "../actionTypes";

const INITIAL_STATE = {
  authDetails: null,
  authLoading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      // console.log("reducer data is here: ", action.authDetails);
      return {
        ...state,
        authDetails: action.payload,
        authLoading: true,
      };
    case AUTH_USER_COMPLETE:
      return {
        ...state,
        authLoading: false,
      };
    case LOGOUT_USER:
      return {
        authLoading: false,
        authDetails: null,
      };
    default:
      return state;
  }
};

export default reducer;
