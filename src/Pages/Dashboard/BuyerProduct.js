import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const BuyerProduct = () => {
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
      <h1 className="text-center text-gray-900 mt-8 text-2xl font-bold">
        {user?.displayName}
      </h1>
      <div className="overflow-x-auto py-8">
        <table className="table  w-full">
          <thead className="bg-accent">
            <tr>
              <th></th>
              <th>Owner</th>
              <th>Selling Price</th>
              <th>Category</th>
              <th>Owner Email</th>
              <th>Owner Phone</th>
              <th>Meeting Place</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.categories}</td>
                <td>{product.email}</td>
                <td>{product.phone}</td>
                <td>{product.buyerMeetingPlace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerProduct;
