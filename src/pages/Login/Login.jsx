import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/Authproviders";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const handleShowPassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
   };
   const { googleLogin, signIn } = useContext(authContext);

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log("Email:", email);
      console.log("Password:", password);
      signIn(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            alert("login successful");
         })
         .catch((err) => {
            alert(`error: ${err.message}`);
         });
   };

   return (
      <div className="w-[90%] md:w-[45%] pt-24 mx-auto h-screen">
         <form
            className="bg-primary/25 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}>
            <div className="mb-4">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email">
                  Email
               </label>
               <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="mb-6">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password">
                  Password
               </label>
               <div className="relative">
                  <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="password"
                     type={showPassword ? "text" : "password"}
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                     type="button"
                     className="absolute right-0 top-0 mt-3 mr-4"
                     onClick={handleShowPassword}>
                     {showPassword ? (
                        <AiOutlineEyeInvisible />
                     ) : (
                        <AiOutlineEye />
                     )}
                  </button>
               </div>
               <p className="py-3 text-gray-700">
                  If you are new Please{" "}
                  <Link
                     to={"/register"}
                     className="font-semibold text-blue-500 cursor-pointer">
                     Login
                  </Link>
               </p>
            </div>
            <div className="flex items-center justify-center">
               <button
                  className="bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  Log In
               </button>
            </div>
         </form>
      </div>
   );
};

export default Login;
