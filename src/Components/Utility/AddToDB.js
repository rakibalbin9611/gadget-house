// src/Utility/AddToDB.js
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

/* ------- write: save the ID as a string ------- */
const addToStoredCartList = (id) => {
  const storedList = getStoredCartList(); // ["8", "15", …]

  const idStr = String(id); // force string
  if (storedList.includes(idStr)) {
    console.log(idStr, "already exists");
  } else {
    storedList.push(idStr);
    localStorage.setItem(CART_KEY, JSON.stringify(storedList));
  }
};

export { addToStoredCartList, getStoredCartList };
