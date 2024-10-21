import "./Cart.css";
import Bottle from "./../Bottle/Bottle";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Cart Bottle added: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div>
            <img key={bottle.id} src={bottle.img}></img>
            <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
