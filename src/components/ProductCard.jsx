import { useEffect, useState } from "react";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => {
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-Card">
          <img
            className="card-img"
            src={product.imageUrl}
            alt={product.imageUrl}
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
              className={`card-price ${product.discountedPrice < product.price ? "on-sale" : ""}`}
            >
              {product.discountedPrice < product.price
                ? `On Sale: $${product.discountedPrice} `
                : ` $${product.price}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
