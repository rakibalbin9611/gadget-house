import { useEffect, useState, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  clearCartList,
  getStoredCartList,
  getStoredWishlist,
  removeCartItems,
  removeWishItems,
} from "../Utility/AddToDB";
import ProductCardShow from "../ProductCartShow/ProductCardShow";
import ShowWishList from "../ShowWishList/ShowWishList";

const DashBoard = () => {
  const navigate = useNavigate();
  const allGadgets = useLoaderData();
  const [productCart, setProductCart] = useState([]);
  const [wishItem, setWishItem] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const handlePurchase = () => {
    // 1) open modal
    setShowModal(true);
    setProductCart([]);
    // 3) clear localStorage cart
    clearCartList();
  };

  /* ---- close modal => go home ------------------- */
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/"); // back to Home without reload
  };

  /* disable purchase if cart empty */
  const purchaseDisabled = productCart.length === 0;

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
    <div className=" ">
      <Tabs className="flex flex-col items-center">
        <div className="bg-purple-600 w-full rounded-2xl">
          <div className="max-w-7xl mx-auto text-center px-2 ">
            <div>
              <h1 className="text-2xl font-bold text-white py-4">Dashboard</h1>
              <p className="text-white ">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to <br /> the coolest
                accessories, we have it all!
              </p>
            </div>

            <TabList className="flex justify-center gap-6 mb-6 mt-8 text-white">
              <Tab>Cart List</Tab>
              <Tab>Wish List</Tab>
            </TabList>
          </div>
        </div>

        {/* ---------- CART LIST ---------- */}
        <TabPanel className="w-full flex flex-col items-center">
          {/* header row */}
          <div className="max-w-4xl mx-auto flex justify-between text-black items-center mt-6 mb-6 px-2">
            {/* left: title */}
            <h3 className="text-2xl font-semibold ">Cart</h3>

            {/* right: price + sort btn */}
            <div className="flex items-center gap-4">
              <p className=" text-2xl">Price: ${totalPrice.toFixed(2)}</p>
              <button
                onClick={handleSortByPrice}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-200"
              >
                Sort by Price
              </button>

              {/* ----- PURCHASE BUTTON ----- */}
              <button
                onClick={handlePurchase}
                disabled={purchaseDisabled}
                className={`${
                  purchaseDisabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                } text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md transition`}
              >
                Purchase
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
      {/* ---------- MODAL ---------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-80 rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-700 mb-6">Your purchase was successful.</p>
            <button
              onClick={handleCloseModal}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
