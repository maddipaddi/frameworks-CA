import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowBigLeft } from "lucide-react";

/**
 * Displays detailed information about a single product, including image, price, discount, description, rating, tags, and reviews.
 * Allows users to add the product to the cart or navigate back.
 *
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.products - Array of product objects to search from.
 * @param {Function} props.addToCart - Function to add the selected product to the cart.
 *
 * @returns {JSX.Element} The rendered SingleProduct component.
 */

function SingleProduct({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === id);
  if (!product) {
    return <p className="text-red-500 text-center mt-5">Product not found.</p>;
  }

  const savings = product.price - product.discountedPrice;

  return (
    <div className="flex flex-col justify-center justify-self-center max-w-[500px] mt-6 mx-4">
      <div className="image-container ">
        <img
          className="object-cover rounded-2xl w-full max-w-[500px] h-auto aspect-[16/9] overflow-hidden border-4 border-accent"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>

      <div className="flex flex-row justify-between items-end">
        <h1 className="product-title pt-4 text-2xl font-title font-semibold">
          {product.title}
        </h1>
        {savings > 0 ? (
          <div className="flex gap-2">
            <p className="text-gray-500 line-through text-lg">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-xl font-bold text-black">
              ${product.discountedPrice.toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-xl font-bold text-black">
            ${product.price.toFixed(2)}
          </p>
        )}
      </div>

      {savings > 0 && (
        <p className="text-green-600 font-bold text-lg flex self-end">
          Save ${savings.toFixed(2)}!
        </p>
      )}

      <p className="pt-4 font-copy">{product.description}</p>

      <p className="pt-4 font-copy">⭐ {product.rating || "No rating"}</p>

      {product.tags && product.tags.length > 0 && (
        <p className="pt-4 font-copy">Tag: {product.tags.join(", ")}</p>
      )}

      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-6 p-4 border-t border-gray-300">
          <h2 className="font-title text-xl font-bold mb-3">Reviews</h2>
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id} className="border-b pb-3 mb-3">
                <p className="font-semibold">{review.username}</p>
                <p>⭐ {review.rating}/5</p>
                <p className="text-gray-700">{review.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-row justify-between my-4">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="hover:shadow-[5px_5px_5px_rgba(0,0,0,0.301)] flex items-center gap-2 cursor-pointer bg-accent text-white p-2 rounded-md"
          >
            <ArrowBigLeft size={30} className="text-white" />
          </button>
        </div>

        <div>
          <button
            onClick={() => addToCart(product)}
            className="hover:shadow-[5px_5px_5px_rgba(0,0,0,0.301)] bg-primary border-2 border-accent font-title rounded-md cursor-pointer text-white p-2"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

SingleProduct.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default SingleProduct;
