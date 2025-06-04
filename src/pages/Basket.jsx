import PropTypes from "prop-types";
import Card from "../components/styled/Card";
import BaseButton from "../components/styled/BaseButton";
import { useNavigate } from "react-router-dom";

/**
 * Basket component displays the user's shopping cart, allowing them to view, update, and remove items,
 * as well as proceed to checkout.
 *
 * @component
 * @param {Object[]} cart - Array of cart item objects. Each item should have `id`, `title`, `image`, `discountedPrice`, and `quantity` properties.
 * @param {Function} setCart - Function to update the cart state.
 *
 * @example
 * <Basket cart={cart} setCart={setCart} />
 */

function Basket({ cart, setCart }) {
  const navigate = useNavigate();
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-200 border-2 border-accent p-4 rounded-md shadow-sm"
              >
                <div className="flex items-center w-full sm:w-auto">
                  <img
                    src={item.image.url}
                    alt={item.image.alt}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium block font-title">
                      {item.title}
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="cursor-pointer"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-12 text-center product-quantity border rounded-md border-gray-600 outline-accent text-sm"
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2 sm:mt-0">
                  <p className="text-gray-900 font-semibold font-copy text-center sm:text-left">
                    ${(item.discountedPrice * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer bg-primary hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-200 mt-2 sm:mt-0"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cart.length === 0 ? (
        <div></div>
      ) : (
        <Card className="max-w-2xl">
          <h2 className="font-title font-bold text-2xl">Total Amount:</h2>
          <p className="font-title font-semibold text-xl">
            ${calculateTotal().toFixed(2)}{" "}
          </p>
          <BaseButton onClick={() => setCart([]) & navigate(`/Checkout`)}>
            Pay
          </BaseButton>
        </Card>
      )}
    </>
  );
}

Basket.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Basket;
