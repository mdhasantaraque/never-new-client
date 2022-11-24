import React from "react";

const ProductType = ({ products }) => {
  const { image, product, details } = products;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-secondary dark:text-gray-900">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{product}</h2>
          <p className="dark:text-gray-900">{details}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-accent dark:text-gray-900 bottom-0"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default ProductType;
