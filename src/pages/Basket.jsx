import PropTypes from "prop-types";

function Basket({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
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
                  <span className="text-gray-600 text-sm font-copy">
                    Quantity: {item.quantity}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2 sm:mt-0">
                <p className="text-gray-900 font-semibold font-copy text-center sm:text-left">
                  ${item.discountedPrice * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-primary hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-200 mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Basket.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Basket;
