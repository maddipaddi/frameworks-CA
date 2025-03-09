import ProductCard from "../components/ProductCard";
import PropTypes from "prop-types";

function Home({ products, addToCart }) {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h1 className="text-2xl font-title font-semibold my-2 mx-auto max-w-max">
        All products
      </h1>
      <ProductCard products={products} addToCart={handleAddToCart} />
    </div>
  );
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Home;
