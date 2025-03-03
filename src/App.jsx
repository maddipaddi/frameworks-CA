import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import SingleProduct from "./pages/SingleProduct";
import Basket from "./pages/Basket";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/Basket" element={<Basket />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
