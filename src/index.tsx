import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import App from "./App";
import { LocaleContextProvider } from "components/LocaleProvider";

ReactDOM.render(
  <React.StrictMode>
    <LocaleContextProvider>
      <App />
    </LocaleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
