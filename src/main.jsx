import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Router from "./Routes/Router.jsx";
import AuthProvider from "./Providers/Authproviders.jsx";
import AuthProviders from "./Providers/Authproviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProviders>
         <RouterProvider router={Router}>
            <App></App>
         </RouterProvider>
      </AuthProviders>
   </React.StrictMode>
);
