import React from "react";
import Navbar from "./Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Shared/Navbar/Footer/Footer";

const App = () => {
   return (
      <div className="">
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default App;
