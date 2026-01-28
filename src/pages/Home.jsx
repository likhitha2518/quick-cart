import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to QuickCart</h1>
      <p>A simple React SPA with API integration using FakeStore API.</p>
      <Link to="/products">
        <button>Explore Products</button>
      </Link>
    </div>
  );
}

export default Home;

