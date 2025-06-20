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

  /* ------------ sync cart & wishlist ------------ */
  useEffect(() => {
    const cartIds = getStoredCartList().map(Number);
    setProductCart(allGadgets.filter((g) => cartIds.includes(g.product_id)));

    const wishIds = getStoredWishlist().map(Number);
    setWishItem(allGadgets.filter((g) => wishIds.includes(g.product_id)));
  }, [allGadgets]);

  /* ------------ subtotal ------------ */
  const totalPrice = useMemo(
    () => productCart.reduce((sum, p) => sum + p.price, 0),
    [productCart]
  );

  /* ------------ purchase ------------ */
  const handlePurchase = () => {
    setShowModal(true);
    setProductCart([]);
    clearCartList();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const purchaseDisabled = productCart.length === 0;

  /* ------------ remove handlers ------------ */
  const handleRemoveWishItem = (id) => {
    setWishItem((prev) => prev.filter((i) => i.product_id !== id));
    removeWishItems(id);
  };

  const handleRemoveCartItem = (id) => {
    setProductCart((prev) => prev.filter((i) => i.product_id !== id));
    removeCartItems(id);
  };

  /* ------------ sort ------------ */
  const handleSortByPrice = () => {
    setProductCart((prev) => [...prev].sort((a, b) => b.price - a.price));
  };

  /* ------------ render ------------ */
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* -------- HERO + TABS HEADER -------- */}
      <Tabs selectedTabClassName="border-b-2 border-white">
        <div className="bg-purple-600 w-full rounded-2xl">
          <div className="max-w-7xl mx-auto text-center px-2 sm:px-6 lg:px-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white py-4">
              Dashboard
            </h1>
            <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            <TabList className="flex flex-wrap justify-center gap-6 mt-6 pb-4 text-white text-sm sm:text-base">
              <Tab className="cursor-pointer px-3 py-1">Cart List</Tab>
              <Tab className="cursor-pointer px-3 py-1">Wish List</Tab>
            </TabList>
          </div>
        </div>

        {/* -------- CART TAB -------- */}
        <TabPanel className="w-full flex flex-col items-center">
          {/* header row */}
          <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 mb-6 px-2">
            <h3 className="text-xl sm:text-2xl font-semibold">Cart</h3>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <p className="text-lg sm:text-xl">
                Price: ${totalPrice.toFixed(2)}
              </p>

              <button
                onClick={handleSortByPrice}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md transition"
              >
                Sort by Price
              </button>

              <button
                onClick={handlePurchase}
                disabled={purchaseDisabled}
                className={`${
                  purchaseDisabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                } text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg shadow-md transition`}
              >
                Purchase
              </button>
            </div>
          </div>

          {/* cart items */}
          <div className="w-full space-y-6">
            {productCart.map((item) => (
              <ProductCardShow
                key={item.product_id}
                cart={item}
                handleRemoveCartItem={handleRemoveCartItem}
              />
            ))}
          </div>
        </TabPanel>

        {/* -------- WISHLIST TAB -------- */}
        <TabPanel className="w-full flex flex-col items-center mt-6 space-y-6">
          {wishItem.map((item) => (
            <ShowWishList
              key={item.product_id}
              cart={item}
              handleRemoveWishItem={handleRemoveWishItem}
            />
          ))}
        </TabPanel>
      </Tabs>

      {/* -------- MODAL -------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-sm rounded-lg p-6 shadow-lg text-center">
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
