import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';

// Get the root element
const container = document.getElementById("root");

// Create a root
const root = createRoot(container!); // Use non-null assertion if you're sure the element exists

// Render the app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
