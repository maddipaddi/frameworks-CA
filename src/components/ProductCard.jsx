import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCard({ products, onProductClick }) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-Card">
          <img
            className="card-img"
            src={product.image.url}
            alt={product.image.alt}
          />
          <h2 className="card-title">{product.title}</h2>

          <p className="card-text">{product.description}</p>

          <p className="card-rating">⭐ {product.rating || "No rating"}</p>

          {product.tags && product.tags.length > 0 && (
            <p className="card-tags">Tag: {product.tags.join(", ")}</p>
          )}

          <div className="button-price-container">
            <button className="card-button">Add</button>
            <p
              className={`card-price font-title font-bold ${product.discountedPrice < product.price ? "on-sale" : ""}`}
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
            className="view-details-btn p-2 pt-3 cursor-pointer"
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
};

export default ProductCard;
