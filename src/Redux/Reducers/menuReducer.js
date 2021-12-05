import { ADD_TO_CART, GET_MENU, REMOVE_FROM_CART } from "../actionTypes";

const INITIAL_STATE = {
  cart: [],
  menu: [],
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
    case GET_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
