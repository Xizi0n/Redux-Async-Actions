import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Kell a Thunk library ahhoz hogy async taskot futtassunk redux-ban
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducers/sw";
import { Provider } from "react-redux";

// Létrehozzuk a storeunkat a reducerrel, illetve hozzáadjuk a storehoz a trunkot middlewareként
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
