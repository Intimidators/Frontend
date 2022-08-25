import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./store/store";
=======
>>>>>>> main
=======
import { Provider } from "react-redux";
import store from "./store/store";
>>>>>>> main
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
<<<<<<< HEAD
      <Provider store={store}>
        <App />
      </Provider>
=======
      <App />
>>>>>>> main
=======
      <Provider store={store}>
        <App />
      </Provider>
>>>>>>> main
    </BrowserRouter>
  </React.StrictMode>
);
