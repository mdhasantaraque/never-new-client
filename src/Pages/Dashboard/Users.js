import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";

const Users = () => {
  const { user } = useContext(AuthContext);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleAdmin = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful.");
          console.log(data);
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-gray-900 mt-8">{user?.displayName}</h1>
      <div className="overflow-x-auto py-8">
        <table className="table  w-full">
          <thead className="bg-accent">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  {user?.role !== "admin" ? (
                    <button
                      onClick={() => handleAdmin(user._id)}
                      className="btn btn-xs btn-info text-white"
                      disabled
                    >
                      Make Admin
                    </button>
                  ) : (
                    "Admin"
                  )}
                </td>

                <td>
                  <button className="btn btn-xs btn-accent text-white">
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

export default Users;
