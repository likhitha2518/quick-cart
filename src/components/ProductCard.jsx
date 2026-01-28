import { Link } from "react-router-dom";

function ProductCard({ product, addToCart, toggleFavorite, isFavorite }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="price">₹ {product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>

      <button
        style={{ marginTop: "8px", backgroundColor: "#10b981" }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

      <button
        style={{
          marginTop: "8px",
          backgroundColor: isFavorite ? "crimson" : "#6b7280"
        }}
        onClick={() => toggleFavorite(product.id)}
      >
        {isFavorite ? "❤️ Favorite" : "🤍 Add Favorite"}
      </button>
    </div>
  );
}

export default ProductCard;

