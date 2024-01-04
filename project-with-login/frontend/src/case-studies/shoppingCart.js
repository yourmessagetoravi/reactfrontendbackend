// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.product.id}>
              {item.product.name} - ${item.product.price} (Quantity: {item.quantity}){' '}
              <button onClick={() => onRemoveFromCart(item.product.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
