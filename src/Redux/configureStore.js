import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./Reducers";
import logger from "redux-logger";

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware);

const store = createStore(rootReducer, undefined, middlewareEnhancer);
const persistor = persistStore(store);

export { store, persistor };
