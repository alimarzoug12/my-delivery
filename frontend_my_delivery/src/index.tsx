import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
