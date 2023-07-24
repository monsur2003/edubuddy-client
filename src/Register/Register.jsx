import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/Authproviders";
import Swal from "sweetalert2";

const Register = () => {
   const { createUser, updateName } = useContext(authContext);
   const navigate = useNavigate();

   const handleRegister = (e) => {
      e.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photo = form.photo.value;
      createUser(email, password)
         .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
            updateName(name, photo);
            Swal.fire({
               position: "center",
               icon: "success",
               title: "Account created successfully",
               showConfirmButton: false,
               timer: 1500,
            });
            navigate("/");
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   return (
      <div>
         <div className="">
            <div className="bg-primary/25 p-8 rounded shadow-md w-[90%] mx-auto my-4 md:w-[45%]">
               <h2 className="text-2xl font-semibold mb-6">Register</h2>
               <form onSubmit={handleRegister}>
                  <div className="mb-4">
                     <label htmlFor="name" className="block font-medium mb-2">
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border rounded"
                     />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="email" className="block font-medium mb-2">
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border rounded"
                     />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="email" className="block font-medium mb-2">
                        Photo URL
                     </label>
                     <input
                        type="text"
                        id="photo"
                        name="photo"
                        className="w-full p-2 border rounded"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="password"
                        className="block font-medium mb-2">
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full p-2 border rounded"
                     />
                  </div>
                  <p className="text-sm text-gray-700 mt-[-20px] py-3 ">
                     If you have already account please{" "}
                     <Link
                        to={"/login"}
                        className="font-semibold underline text-[16px] text-blue-500 ">
                        Login
                     </Link>
                  </p>
                  <button
                     type="submit"
                     className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                     Register
                  </button>
               </form>
               <div className="text-center mt-4">
                  <Link href="#" className="text-blue-500 hover:underline">
                     Forgot Password?
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
