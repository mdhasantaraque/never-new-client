import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Pages/Hooks/useAdmin";
import Navbar from "../Share/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [role, setRole] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/dashboard/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const status = data.role;
        setRole(status);
      });
  }, [user.email]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-accent">
            {role === "buyer" ? (
              <>
                <li className="bg-accent text-white rounded hover:bg-red-400 font-semi-bold my-2">
                  <Link to="/dashboard/buyerProducts">My Products</Link>
                </li>
              </>
            ) : (
              <>
                <li className="bg-accent text-white rounded hover:bg-red-400 font-semi-bold my-2">
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
                <li className="bg-accent text-white rounded hover:bg-red-400 font-semi-bold my-2">
                  <Link to="/dashboard/addProducts">Add My Product</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <li className="bg-accent text-white rounded hover:bg-red-400 font-semi-bold my-2">
                <Link to="/dashboard/users">User Details</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
