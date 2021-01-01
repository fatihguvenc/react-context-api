import React from "react";
import { products } from "../data/products";
import { Link, Switch, Route } from "react-router-dom";
import ProductDT from "./ProductDT";

export default function Product() {
  const productsMap = products.map(item => (
    <li>
      <Link to={`/product/${item._id}`}>{item.title}</Link>
    </li>
  ));
  return (
    <div>
      <h1>Products</h1>
      <hr />
      {productsMap}
      <Switch>
        <Route path="/product/:productID">
          <ProductDT />
        </Route>
      </Switch>
    </div>
  );
}
