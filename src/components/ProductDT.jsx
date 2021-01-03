import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDT() {
  const { productID } = useParams();

  const product = products.filter(item => item._id === Number(productID));
  return (
    <div className="mt-5">
      <h1 className="mb-5">Product:</h1>
      <h2>{product[0].title}</h2>
      <p>{product[0].detail}</p>
    </div>
  );
}
