import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import logger from "./middlewares/sockets";

import registerServiceWorker from "./registerServiceWorker";
import { unregister } from "./registerServiceWorker";

const initialState = {};

const store = createStore(
  (state = initialState, action) => state,
  applyMiddleware(logger())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//registerServiceWorker();
unregister();
