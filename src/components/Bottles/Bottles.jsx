import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLocalStorage, getStoredCart } from "../../Utilities/Utilities";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottle, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottoles.json")
      .then((response) => response.json())
      .then((data) => setBottles(data));
  }, []);

  //   load cart from local storage
  useEffect(() => {
    console.log(bottle.length);
    if (bottle.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottle);
      const savedCart = [];

      for (const id of storedCart) {
        console.log(id);
        const bottle1 = bottle.find((bottle) => bottle.id === id);
        if (bottle1) {
          savedCart.push(bottle1);
        }
      }
      console.log(savedCart);
      setCart(savedCart);
    }
  }, [bottle]);

  const handleAddToCart = (bottle) => {
    console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id);
  };

  const handleRemoveFromCart = (id) => {

    // visual cart remove
    const remainingCart = cart.filter(bottle => bottle.id !== id)
    setCart(remainingCart)

    // rmeove local storage 
    removeFromLocalStorage(id);
  };

  return (
    <div>
      <h1>Bottles Available: {bottle.length}</h1>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottles-container">
        {/* Send fetched data to Bottle components  */}
        {bottle.map((bottles) => (
          <Bottle
            key={bottles.id}
            bottle={bottles}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
