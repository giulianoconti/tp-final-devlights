import React from "react";
import ReactDOM from "react-dom/client";
import { AppBrowserRouter } from "./AppBrowserRouter";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppBrowserRouter />
  </React.StrictMode>
);
