import ProductCard from "../components/ProductCard";
import PropTypes from "prop-types";

/**
 * Home component displays a list of products and allows users to add products to the cart.
 *
 * @component
 * @param {Object[]} products - Array of product objects to display.
 * @param {Function} addToCart - Function to add a selected product to the cart.
 * @returns {JSX.Element} The rendered Home component.
 */

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
