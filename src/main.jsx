import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Root from "./componets/Root/Root";
import ErrorPage from "./componets/ErrorPage/ErrorPage";
import Home from "./componets/Home/Home";
import Dashboard from "./componets/Dashboard/Dashboard";
import Statistics from "./componets/Statistics/Statistics";
import Gadgets from "./componets/Home/Gadgets";
import Cart from "./componets/Dashboard/Cart";
import GadgetsDetails from "./componets/GadgetsDetails/GadgetsDetails";
import WishList from "./componets/Dashboard/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../buttonForCards.json"),
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../gadgetData.json"),
          },
          {
            path: "/category/:category",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../gadgetData.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        // loader: () => fetch("../gadgetData.json"),
        children: [
          {
            path: "",
            element: <Cart></Cart>,
            loader: () => fetch("../gadgetData.json"),
          },
          {
            path: "cart",
            element: <Cart></Cart>,
            loader: () => fetch("../gadgetData.json"),
          },
          {
            path: "wishlist",
            element: <WishList></WishList>,
            loader: () => fetch("../gadgetData.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../gadgetData.json"),
      },
      {
        path: "/gadgets/:product_id",
        element: <GadgetsDetails></GadgetsDetails>,
        loader: () => fetch("../gadgetData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
