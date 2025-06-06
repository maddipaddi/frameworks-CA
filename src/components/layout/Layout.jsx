import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Layout component that wraps the main application structure.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array} props.products - List of products to be passed to the Header.
 * @param {Array} props.cart - List of items in the shopping cart to be passed to the Header.
 * @returns {JSX.Element} The rendered layout with Header, Outlet, and Footer.
 */

function Layout({ products, cart }) {
  return (
    <div>
      <Header products={products} cart={cart} />
      <Outlet />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};

export default Layout;
