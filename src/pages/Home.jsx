import ProductCard from "../components/ProductCard";
import PropTypes from "prop-types";

function Home({ products }) {
  return (
    <>
      <div>
        <ProductCard products={products} />
      </div>
    </>
  );
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Home;
