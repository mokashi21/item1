import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <span classtitle="logo">Store</span>
      <div>
        <Link classtitle="navLink" to="/">
          {" "}
          Home
        </Link>
        <Link classtitle="navLink" to="/cart">
          {" "}
          Cart
        </Link>
        <span classtitle="cartCount">Cart Items : {cartItems.length} </span>
      </div>
    </div>
  );
}

export default Navbar;
