import { toast } from "react-toastify";

const CART_KEY = "cart-list";

/* ------- read: always return an array of strings ------- */
const getStoredCartList = () => {
  const storedListStr = localStorage.getItem(CART_KEY);

  if (!storedListStr) return [];

  try {
    // Cast every entry to string so legacy numbers become strings too
    const storedList = JSON.parse(storedListStr).map(String);
    return storedList;
  } catch {
    return [];
  }
};

// for wish list:
const WISH_KEY = "wish-list";
const getStoredWishlist = () => {
  const storedListStr = localStorage.getItem(WISH_KEY);

  if (!storedListStr) return [];

  try {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } catch {
    return [];
  }
};

/* ------- write: save the ID as a string ------- */
const addToStoredCartList = (id) => {
  const storedList = getStoredCartList(); // ["8", "15", …]

  const idStr = String(id); // force string
  if (storedList.includes(idStr)) {
    toast("Already exists");
  } else {
    storedList.push(idStr);
    localStorage.setItem(CART_KEY, JSON.stringify(storedList));
    toast("Added to Cart List");
  }
};

const addToStoredWishList = (id) => {
  const storedList = getStoredWishlist();
  const idStr = String(id);
  if (storedList.includes(idStr)) {
    toast("Already exits in wish list.");
  } else {
    storedList.push(idStr);
    localStorage.setItem(WISH_KEY, JSON.stringify(storedList));
    toast("Added to Wish List");
  }
};

// Remove functionalities
const removeWishItems = (id) => {
  const idStr = String(id);
  const wishItems = getStoredWishlist();
  const remaining = wishItems.filter((itemId) => itemId !== idStr);
  localStorage.setItem(WISH_KEY, JSON.stringify(remaining));
};

const removeCartItems = (id) => {
  const idStr = String(id);
  const cartItems = getStoredCartList();
  const remaining = cartItems.filter((itemId) => itemId !== idStr);
  localStorage.setItem(CART_KEY, JSON.stringify(remaining));
};

const clearCartList = () => localStorage.removeItem("cart-list");

export {
  addToStoredCartList,
  getStoredCartList,
  addToStoredWishList,
  getStoredWishlist,
  removeWishItems,
  removeCartItems,
  clearCartList,
};
