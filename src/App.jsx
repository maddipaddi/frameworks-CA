import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import SingleProduct from "./pages/SingleProduct";
import Basket from "./pages/Basket";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout products={products} cart={cart} />}>
          <Route
            index
            element={<Home products={products} addToCart={addToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product/:id"
            element={
              <SingleProduct products={products} addToCart={addToCart} />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductCard
                products={products}
                onProductClick={null}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/basket"
            element={<Basket cart={cart} setCart={setCart} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
