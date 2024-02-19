import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeData } from "../redux/cartSlice";

function Cart() {
  const productsList = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleDelete = (prod) => {
    dispatch(removeData(prod));
  };
  return (
    <div>
      <h4>Cart Items</h4>
      {productsList.map((product) => (
        <div>
          <img src={product.image} alt="" />
          <h3>{product.title}</h3>
          <h5>${product.price}</h5>
          <button onClick={() => handleDelete(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
