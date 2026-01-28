import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <div className="detail">
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3 className="price">₹ {product.price}</h3>
          <p><b>Category:</b> {product.category}</p>
          <Link to="/products">
            <button>← Back to Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
