import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowBigLeft } from "lucide-react";

function SingleProduct({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === id);
  if (!product) {
    return <p className="text-red-500 text-center mt-5">Product not found.</p>;
  }

  return (
    <div className="single-product flex flex-col justify-center justify-self-center min-h-screen max-w-[500px]">
      <div className="image-container ">
        <img
          className="product-img border-4 border-accent"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>

      <div className="title-price-container flex flex-row justify-between items-end">
        <h1 className="product-title pt-4 text-2xl font-title font-semibold">
          {product.title}
        </h1>

        <p
          className={`product-price font-title font-semibold ${product.discountedPrice < product.price ? "on-sale" : ""}`}
        >
          {product.discountedPrice < product.price
            ? `On Sale: $${product.discountedPrice} `
            : ` $${product.price}`}
        </p>
      </div>

      <p className="product-description pt-4 font-copy">
        {product.description}
      </p>

      <p className="product-rating pt-4 font-copy">
        ⭐ {product.rating || "No rating"}
      </p>

      {product.tags && product.tags.length > 0 && (
        <p className="card-tags pt-4 font-copy">
          Tag: {product.tags.join(", ")}
        </p>
      )}

      <div className="product-btn-container pt-30 flex flex-row justify-between">
        <div className="back-btn-container">
          <button
            onClick={() => navigate(-1)}
            className="go-back-btn flex items-center gap-2 cursor-pointer bg-accent text-white p-2 rounded-md"
          >
            <ArrowBigLeft size={30} className="text-white" />
          </button>
        </div>

        <div>
          <button
            onClick={() => addToCart(product)}
            className="product-add-btn bg-primary border-2 border-accent font-title rounded-md cursor-pointer text-white p-2"
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
