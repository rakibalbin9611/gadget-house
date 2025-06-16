import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCartList } from "../Utility/AddToDB";
import ProductCardShow from "../ProductCartShow/ProductCardShow";

const DashBoard = () => {
  const allGadgets = useLoaderData();
  const [productCart, setProductCart] = useState([]);

  /* sync cart once */
  useEffect(() => {
    const ids = getStoredCartList().map(Number);
    setProductCart(allGadgets.filter((g) => ids.includes(g.product_id)));
  }, [allGadgets]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Tabs
        /* center the whole Tabs element */
        className="flex flex-col items-center"
      >
        {/* ---------- TAB HEADER ---------- */}
        <TabList className="flex justify-center gap-6 mb-6">
          <Tab>Cart List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        {/* ---------- CART LIST ---------- */}
        <TabPanel className="w-full flex flex-col items-center">
          {productCart.map((cart) => (
            <ProductCardShow key={cart.product_id} cart={cart} />
          ))}
        </TabPanel>

        {/* ---------- WISHLIST ---------- */}
        <TabPanel className="w-full flex flex-col items-center">
          <p className="text-gray-500">Your wishlist is empty.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DashBoard;
