const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }

  return [];
};

const saveCartLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);

  saveCartLocalStorage(cart);
};

const removeFromLocalStorage = (id) => {
  const cart = getStoredCart();
  // remove every id
  const remaining = cart.filter((idx) => idx !== id);
  saveCartLocalStorage(remaining);
};
export { addToLocalStorage, getStoredCart };
