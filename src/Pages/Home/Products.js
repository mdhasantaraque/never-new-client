import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import ProductType from "./ProductType";

const Products = () => {
  const [typeProducts, setTypeProducts] = useState([]);

  // useEffect(() => {
  //   fetch("Products.json")
  //     .then((res) => res.json())
  //     .then((data) => setTypeProducts(data));
  // }, []);

  const { data: productOptions = [] } = useQuery({
    queryKey: ["productOptions"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/productOptions`
      );
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  return (
    <div className="my-32 mx-auto">
      <h1 className="text-center text-accent font-bold text-xl mb-24">
        Available used vehicle
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 justify-items-center">
        {productOptions.map((products) => (
          <ProductType key={products._id} products={products}></ProductType>
        ))}
      </div>
    </div>
  );
};

export default Products;
