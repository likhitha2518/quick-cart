import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products").then(res => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then(res => res.json())
    ])
      .then(([productsData, categoriesData]) => {
        setProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  // Add to Cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Added to cart");
  };

  // Toggle Favorite
  const toggleFavorite = (id) => {
    let updatedFavs;
    if (favorites.includes(id)) {
      updatedFavs = favorites.filter(fav => fav !== id);
    } else {
      updatedFavs = [...favorites, id];
    }
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  // Filter logic
  const filteredProducts = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      selectedCategory === "all" ? true : p.category === selectedCategory
    );

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <h2>Products</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "15px" }}
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
      >
        <option value="all">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <p>
        🛒 Cart Items: <b>{cart.length}</b> | ❤️ Favorites: <b>{favorites.length}</b>
      </p>

      {/* Product Grid */}
      <div className="grid">
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(product.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage}
        </span>

        <button
          disabled={indexOfLast >= filteredProducts.length}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;


