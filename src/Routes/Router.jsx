import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Homes/Home/Home";
import Collages from "../pages/Collages/Collages";
import MyCollage from "../pages/MyCollages/MyCollage";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";
const Router = createBrowserRouter([
   {
      path: "/",
      element: <App></App>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/collages",
            element: <Collages></Collages>,
         },
         {
            path: "/mycollage",
            element: <MyCollage></MyCollage>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
      ],
   },
]);

export default Router;
