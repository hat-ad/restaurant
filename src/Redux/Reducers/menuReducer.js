import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

const INITIAL_STATE = {
  cart: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
