import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2bb3"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 399,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 249,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 4,
    name: "Lavender",
    price: 349,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
  },
  {
    id: 5,
    name: "Money Plant",
    price: 199,
    category: "Hanging Plants",
    image:
      "https://images.unsplash.com/photo-1614594575950-1b3f5c7f3b5a"
  },
  {
    id: 6,
    name: "String of Pearls",
    price: 449,
    category: "Hanging Plants",
    image:
      "https://images.unsplash.com/photo-1604594849809-dfedbc827105"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const cartQuantity = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        ...product,
        quantity: 1
      })
    );
  };

  const categories = [
    "Indoor Plants",
    "Medicinal Plants",
    "Hanging Plants"
  ];

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="cart">
          🛒 Cart ({cartQuantity})
        </div>
      </nav>

      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    width="200"
                    height="200"
                  />

                  <h3>{product.name}</h3>

                  <p>₹{product.price}</p>

                  <button
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
