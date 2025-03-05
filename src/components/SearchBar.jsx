import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import PropTypes from "prop-types";

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts([]);
      return;
    }

    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(results);
  }, [searchTerm, products]);

  const handleNavigate = (id) => {
    setSearchTerm("");
    setFilteredProducts([]);
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="flex self-center border-2 border-solid rounded-full">
        <Search className="flex self-center mx-2" />
        <input
          className="px-4 py-1 text-copy focus:outline-none lg:w-96"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {filteredProducts.length > 0 && (
          <ProductCard
            products={filteredProducts}
            onProductClick={handleNavigate}
          />
        )}
      </div>
    </>
  );
};

SearchBar.propTypes = {
  products: PropTypes.array.isRequired,
};

export default SearchBar;
