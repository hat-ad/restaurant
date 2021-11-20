import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistCombineReducers } from "redux-persist";

import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
  cart: menuReducer,
});

export default rootReducer;
