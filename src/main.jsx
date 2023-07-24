import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Router from "./Routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={Router}>
         <App></App>
      </RouterProvider>
   </React.StrictMode>
);