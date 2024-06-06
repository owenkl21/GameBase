import React from 'react';

interface CartProps {
  shoppingCart: string[];
  onClear: () => void;
}

const Cart = ({ shoppingCart, onClear }: CartProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {shoppingCart.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button onClick={onClear}>Clear Cart</button>
    </>
  );
};

export default Cart;
