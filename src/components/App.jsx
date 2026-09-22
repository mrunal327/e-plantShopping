import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="landing-page">
      {!showProducts ? (
        <div className="content">
          <h1>Paradise Nursery</h1>
          <p>Welcome to Paradise Nursery</p>

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
