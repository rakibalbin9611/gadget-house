import { useEffect, useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getStoredCartList,
  getStoredWishlist,
  removeCartItems,
  removeWishItems,
} from "../Utility/AddToDB";
import ProductCardShow from "../ProductCartShow/ProductCardShow";
import ShowWishList from "../ShowWishList/ShowWishList";

const DashBoard = () => {
  const allGadgets = useLoaderData();
  const [productCart, setProductCart] = useState([]);
  const [wishItem, setWishItem] = useState([]);

  /* sync cart & wishlist once */
  useEffect(() => {
    /* cart */
    const cartIds = getStoredCartList().map(Number);
    setProductCart(allGadgets.filter((g) => cartIds.includes(g.product_id)));

    /* wishlist */
    const wishIds = getStoredWishlist().map(Number);
    setWishItem(allGadgets.filter((g) => wishIds.includes(g.product_id)));
  }, [allGadgets]);

  /* subtotal (optional but handy) */
  const totalPrice = useMemo(
    () => productCart.reduce((sum, p) => sum + p.price, 0),
    [productCart]
  );

  /* remove handlers */
  const handleRemoveWishItem = (id) => {
    setWishItem((prev) => prev.filter((i) => i.product_id !== id));
    removeWishItems(id);
  };

  const handleRemoveCartItem = (id) => {
    setProductCart((prev) => prev.filter((i) => i.product_id !== id));
    removeCartItems(id);
  };

  /* sorting stub */
  const handleSortByPrice = () => {
    setProductCart(
      (prev) => [...prev].sort((a, b) => b.price - a.price) // high → low
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <Tabs className="flex flex-col items-center">
        <TabList className="flex justify-center gap-6 mb-6">
          <Tab>Cart List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        {/* ---------- CART LIST ---------- */}
        <TabPanel className="w-full flex flex-col items-center">
          {/* header row */}
          <div className="max-w-4xl mx-auto flex justify-between items-center mb-6 px-2">
            {/* left: title */}
            <h3 className="text-2xl font-semibold text-white">Cart</h3>

            {/* right: price + sort btn */}
            <div className="flex items-center gap-4">
              <p className="text-white text-2xl">
                Price: ${totalPrice.toFixed(2)}
              </p>
              <button
                onClick={handleSortByPrice}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-200"
              >
                Sort by Price
              </button>
            </div>
          </div>

          {/* cart items */}
          {productCart.map((item) => (
            <ProductCardShow
              key={item.product_id}
              cart={item}
              handleRemoveCartItem={handleRemoveCartItem}
            />
          ))}
        </TabPanel>

        {/* ---------- WISHLIST ---------- */}
        <TabPanel className="w-full flex flex-col items-center">
          {wishItem.map((item) => (
            <ShowWishList
              key={item.product_id}
              cart={item}
              handleRemoveWishItem={handleRemoveWishItem}
            />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DashBoard;
