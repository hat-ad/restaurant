import React from "react";
import { AppLoader, ToastNotification } from "./Components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/configureStore";
import Routes from "./Router";

import "./App.css";
import "./Assets/css/bootstrap.min.css";
import "./Assets/css/style.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<AppLoader />} persistor={persistor}>
          <ToastNotification />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
