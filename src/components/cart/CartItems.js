import React from "react";
import CartItem from "./CartItem";
import './Cart.css';
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList); // Fix variable name from cartItem to cartItems

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              quantity={item.quantity}
              id={item.id}
              name={item.name}
              total={item.totalPrice}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;

