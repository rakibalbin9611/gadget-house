import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.jsx";
import DashBoard from "./Components/Dashboard/DashBoard.jsx";
import { Bounce, ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/product/:productId",
        element: <ProductDetail></ProductDetail>,
        // /product/:productId   route
        loader: async ({ params }) => {
          const res = await fetch("/gadgets.json");
          const gadgets = await res.json(); // full array

          // compare after string‑ifying the product_id
          return (
            gadgets.find((g) => String(g.product_id) === params.productId) ||
            null
          );
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </StrictMode>
);
