import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  console.log(bottle);
  return (
    <div className="bottle">
      <h1>Name: {name}</h1>
      <img src={img} alt="" />
      <h2>Price: {price}$</h2>
      <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
