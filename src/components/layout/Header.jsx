import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import PropTypes from "prop-types";

/**
 * Header component displays the main navigation bar, site title, and cart icon with item count.
 * It includes a responsive navigation menu for mobile devices and a search bar for products.
 *
 * @component
 * @param {Object[]} products - Array of product objects to be used in the SearchBar component.
 * @param {Object[]} cart - Array of cart item objects, each containing a `quantity` property.
 * @returns {JSX.Element} The rendered header component.
 */

function Header({ products, cart }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex flex-col gap-6 m-4 p-4 font-logo">
      <nav className="flex justify-between">
        <section className="flex lg:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <i className="fa-solid fa-bars text-2xl text-primary px-2 md:px-14"></i>
          </button>
          <div
            className={`fixed top-4 left-4 w-64 h-80 rounded-lg bg-primary shadow-lg p-5 transform ${
              isNavOpen ? "translate-x-0" : "-translate-x-[110%]"
            } transition-transform duration-300 ease-in-out`}
          >
            <button
              className="text-xl text-background absolute top-4 right-4 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <i className="fa-solid fa-x"></i>
            </button>

            <ul className="flex flex-col items-center justify-between text-lg font-semibold text-background bg-primary mt-10 space-y-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </section>
        <h1 className="text-2xl font-semibold text-primary px-2">
          ClicketyCart
        </h1>
        <ul className="hidden lg:flex self-center px-4 gap-12 text-lg font-semibold text-primary">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <NavLink
          to="/Basket"
          className="relative px-2 md:px-14 flex self-center"
        >
          <i className="fa-solid fa-cart-shopping text-primary text-2xl"></i>
          {totalCartItems > 0 && (
            <span className="cart-badge absolute -top-3 ml-4 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
              {totalCartItems}
            </span>
          )}
        </NavLink>
      </nav>
      <SearchBar products={products} />
    </header>
  );
}

Header.propTypes = {
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};

export default Header;
