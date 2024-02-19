// Products.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/cartSlice";

function Products() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      setItems(json);
    };
    fetchData();
  }, []);

  const handleAdd = (productID) => {
    dispatch(addData(productID));
  };

  return (
    <div classtitle="productsWrapper">
      {items.map((product) => (
        <div classtitle="card" key={product.id}>
          <img src={product.image} alt="" />
          <h3>{product.title}</h3>
          <h5>${product.price}</h5>
          <button onClick={() => handleAdd(product)} classtitle="btn">
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;

// cartSlice.js
