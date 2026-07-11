import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cake from "./pages/Cake";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (cake) => {
    setCart([...cart, cake]);
    alert("Cake Added Successfully!");
  };
  const removeFromCart = (index) => {
  const updatedCart = [...cart];
  updatedCart.splice(index, 1);
  setCart(updatedCart);
};

  return (
    
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cakes"
          element={<Cake addToCart={addToCart} />}
        />
        <Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      removeFromCart={removeFromCart}
    />
  }
/>
      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;