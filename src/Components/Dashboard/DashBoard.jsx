import { useEffect, useState } from "react";
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
  /* sync cart once */
  useEffect(() => {
    const ids = getStoredCartList().map(Number);
    setProductCart(allGadgets.filter((g) => ids.includes(g.product_id)));

    /* wish list  */

    const storedWishList = getStoredWishlist();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishProduct = allGadgets.filter((g) =>
      storedWishListInt.includes(g.product_id)
    );
    setWishItem(wishProduct);
  }, [allGadgets]);

  // Remove functionalities :
  const handleRemoveWishItem = (id) => {
    // remove from UI
    const remainingWishProduct = wishItem.filter(
      (item) => item.product_id !== id
    );
    setWishItem(remainingWishProduct);

    //  remove from localStorage
    removeWishItems(id);
  };

  const handleRemoveCartItem = (id) => {
    // Remove form UI
    const remainingCartProduct = productCart.filter(
      (item) => item.product_id !== id
    );
    setProductCart(remainingCartProduct);
    // remove from localStorage
    removeCartItems(id);
  };

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
          {productCart.map((item) => (
            <ProductCardShow
              handleRemoveCartItem={handleRemoveCartItem}
              key={item.product_id}
              cart={item}
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
            ></ShowWishList>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DashBoard;
