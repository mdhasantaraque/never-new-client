import React, { useEffect, useState } from "react";
import ProductType from "./ProductType";

const Products = () => {
  const [typeProducts, setTypeProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setTypeProducts(data));
  }, []);

  return (
    <div className="my-32 mx-auto">
      <h1 className="text-center text-accent font-bold text-xl mb-24">
        Available used vehicle
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 justify-items-center">
        {typeProducts.map((products) => (
          <ProductType key={products.id} products={products}></ProductType>
        ))}
      </div>
    </div>
  );
};

export default Products;
