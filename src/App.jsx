import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import SingleProduct from "./pages/SingleProduct";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout products={products} />}>
          <Route index element={<Home products={products} />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product/:id"
            element={<SingleProduct products={products} />}
          />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
