import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `${process.env.REACT_APP_API_URL}/productDetails?email=${user?.email}`;

  const { data: products = [] } = useQuery({
    queryKey: ["productDetails", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-center text-gray-900 mt-8">{user?.displayName}</h1>
      <div className="overflow-x-auto py-8">
        <table className="table  w-full">
          <thead className="bg-accent">
            <tr>
              <th></th>
              <th>Category</th>
              <th>Price</th>
              <th>Post Date</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.categories}</td>
                <td>{product.price}</td>
                <td>{product.purchase}</td>
                <td>{product.location}</td>
                <td>
                  <button className="btn-sm bg-accent rounded-sm">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
