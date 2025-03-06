import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

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
