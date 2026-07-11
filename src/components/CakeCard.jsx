function CakeCard({ cake, addToCart }) {
  return (
    <div className="card">
      <img src={cake.image} alt={cake.name} />

      <h3>{cake.name}</h3>

      <p>₹{cake.price}</p>

      <button onClick={() => addToCart(cake)}>
        Add To Cart
      </button>
    </div>
  );
}

export default CakeCard;