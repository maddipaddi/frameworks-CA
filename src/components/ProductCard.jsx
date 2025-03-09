import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCard({ products, onProductClick, addToCart }) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 p-4 w-full box-border xl:container m-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-between outline-2 outline-accent rounded-lg shadow-md shadow-gray-700/50 m-2 w-full max-w-[300px] box-border"
        >
          <img
            className="w-full h-[150px] object-cover rounded-t-lg"
            src={product.image.url}
            alt={product.image.alt}
          />
          <h2 className="font-title text-lg font-extrabold pl-5 pr-2 my-2 overflow-hidden">
            {product.title}
          </h2>

          <p className="font-copy pl-5 pr-2 my-2 overflow-hidden">
            {product.description}
          </p>

          <p className="pl-5 pr-2 my-2 overflow-hidden">
            ⭐ {product.rating || "No rating"}
          </p>

          {product.tags && product.tags.length > 0 && (
            <p className="pl-5 pr-2 my-2 overflow-hidden">
              Tag: {product.tags.join(", ")}
            </p>
          )}

          <div className="flex justify-between items-center gap-4 w-full mt-2 mb-2">
            <button
              onClick={() => {
                addToCart(product);
              }}
              className="font-title bg-primary text-white text-lg font-bold py-1 px-2 ml-5 border border-black hover:bg-accent  hover:cursor-pointer "
            >
              Add
            </button>
            <p
              className={`font-title font-bold m-0 mr-5 ${product.discountedPrice < product.price ? "on-sale text-red-600" : ""}`}
            >
              {product.discountedPrice < product.price
                ? `On Sale: $${product.discountedPrice} `
                : ` $${product.price}`}
            </p>
          </div>
          <button
            onClick={() =>
              onProductClick
                ? onProductClick(product.id)
                : navigate(`/product/${product.id}`)
            }
            className="view-details-btn p-2 pt-3 cursor-pointer hover:bg-primary hover:text-white  rounded-bl-lg rounded-br-lg"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

ProductCard.propTypes = {
  products: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
