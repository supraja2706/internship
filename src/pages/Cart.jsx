function Cart({ cart, removeFromCart }){
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-container">

      <h1 className="cart-title">
        Shopping Cart
      </h1>

      {cart.map((item, index) => (

        <div className="cart-item" key={index}>

          <img
            src={item.image}
            alt={item.name}
            className="cart-img"
          />

          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <button
  className="remove-btn"
  onClick={() => removeFromCart(index)}
>
  Remove
</button>
        </div>

      ))}

      <div className="total-box">
        <h2>Total : ₹{total}</h2>
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;