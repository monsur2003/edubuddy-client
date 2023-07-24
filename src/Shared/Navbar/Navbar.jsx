import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <div
            className="cursor-pointer md:hidden  flex items-center justify-between p-5"
            onClick={() => setIsOpen(!isOpen)}>
            <h2 className="text-2xl font-primary font-semibold uppercase text-secondary">
               monsur.
            </h2>
            <div>
               {isOpen ? (
                  <FaTimes className="text-4xl text-gray-200"></FaTimes>
               ) : (
                  <FaBars className="text-4xl text-gray-200"></FaBars>
               )}
            </div>
         </div>
         <nav
            className={`md:flex md:w-[100%] md:justify-between md:relative  z-40 md:h-[70px] bg-primary/50  absolute   md:p-6 md:px-14 backdrop-filter backdrop-blur-sm   left-0 right-0 duration-700 md:items-center ${
               isOpen ? "pt-10 md:p-0 bg-blue-950" : "-mt-80 md:mt-0"
            }`}>
            <div>
               <h2 className="text-4xl font-primary hidden md:block font-semibold uppercase text-secondary">
                  EDU BUDDY
               </h2>
            </div>
            <div className="uppercase text-gray-200 text-[14px] md:space-x-4 flex justify-between flex-col space-y-3 md:space-y-0 items-center md:flex-row">
               <Link
                  to="/"
                  className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  Home
               </Link>
               <Link
                  to="/login"
                  className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  Login
               </Link>
               <Link
                  to={"/collages"}
                  className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  Collages
               </Link>
               <Link className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  Admission
               </Link>
               <Link
                  to={"/mycollage"}
                  className="cursor-pointer font-semibold hover:text-secondary duration-700 delay-100">
                  MyCollages
               </Link>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
