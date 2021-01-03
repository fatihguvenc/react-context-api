import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDT() {
  const { productID } = useParams();

  const product = products
    .filter(item => item._id === Number(productID))
    .map(item => (
      <div className="mt-5">
        <h1 className="mb-5">Product:</h1>
        <h2>{item.title}</h2>
        <p>{item.detail}</p>
      </div>
    ));
  return <>{product}</>;
}
