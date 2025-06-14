import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import ProductDetail from "./Components/ProductDetail/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("gadgets.json"),
      },
      {
        path: "/product/:productId",
        element: <ProductDetail></ProductDetail>,
        loader: async ({ params }) => {
          const res = await fetch("/gadgets.json");
          const data = await res.json();

          const product = data.find((p) =>
            String(p.product_id === params.productId)
          );
          if (!product) {
            throw new Response("Not Found", { status: 404 });
          }
          return product;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
