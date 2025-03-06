import ProductCard from "../components/ProductCard";
import PropTypes from "prop-types";

function Home({ products, addToCart }) {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <ProductCard products={products} addToCart={handleAddToCart} />
    </div>
  );
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Home;
