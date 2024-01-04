// ProductList.js
import React, { useState } from 'react';

const ProductList = ({ onAddToCart }) => {
  const [productQuantities, setProductQuantities] = useState({});

  const handleAddToCart = (product) => {
    setProductQuantities(prevQuantities => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1
    }));

    onAddToCart(product, productQuantities[product.id] || 1);
  };

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <span>Quantity: {productQuantities[product.id] || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
