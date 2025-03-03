import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="single-product flex flex-col justify-center justify-self-center min-h-screen max-w-[500px]">
      <div className="image-container ">
        <img
          className="product-img border-4 border-accent"
          src={product.imageUrl}
          alt={product.imsgeAlt}
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
            onClick={() => window.history.back()}
            className="go-back-btn flex items-center gap-2 cursor-pointer bg-accent text-white p-2 rounded-md"
          >
            <ArrowBigLeft size={30} className="text-white" />
          </button>
        </div>

        <div>
          <button className="product-add-btn bg-primary border-2 border-accent font-title rounded-md cursor-pointer text-white p-2">
            Add To Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
