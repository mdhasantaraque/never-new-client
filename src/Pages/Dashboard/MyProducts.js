import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";
import BuyerProduct from "./BuyerProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `${process.env.REACT_APP_API_URL}/productDetails?email=${user?.email}`;

  const { data: products = [], refetch } = useQuery({
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
  console.log(products);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to remove your product"
    );
    console.log(id);
    if (proceed) {
      fetch(`${process.env.REACT_APP_API_URL}/dashboard/myProducts/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error("deleted successfully");
            refetch();
          }
        });
    }
  };
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
              <th>Category</th>
              <th>Price</th>
              <th>Post Date</th>
              <th>Status</th>
              <th>Option</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.categories}</td>
                <td>{product.price}</td>
                <td>{product.date}</td>
                <td>{product.status}</td>
                <td>
                  {product.status === "booked" ? (
                    <p className=" text-red-600">booked</p>
                  ) : (
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-sm bg-accent text-white font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </td>
                <td>
                  {product.status === "booked" ? (
                    <p className=" text-red-600">booked</p>
                  ) : (
                    <button
                      onClick={""}
                      className="btn btn-sm bg-info font-bold text-white"
                    >
                      Advertise
                    </button>
                  )}
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
