import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function Layout({ products }) {
  return (
    <div>
      <Header products={products} />
      <Outlet />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Layout;
