import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <div>
                <h2>{item.name}</h2>
                <p>Price: ₹{item.price}</p>

                <label>
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        Number(e.target.value)
                      )
                    }
                  />
                </label>

                <p>
                  Subtotal: ₹{item.price * item.quantity}
                </p>

                <button onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartItem;
