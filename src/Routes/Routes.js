import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct";
import BuyerProduct from "../Pages/Dashboard/BuyerProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProducts";
import Users from "../Pages/Dashboard/Users";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Bike from "../Pages/Vehicle/Bike";
import Car from "../Pages/Vehicle/Car";
import Vehicle from "../Pages/Vehicle/Vehicle";
import Error from "../Share/Error";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/car",
        element: <Car></Car>,
      },
      {
        path: "/bike",
        element: <Bike></Bike>,
      },
      {
        path: "/vehicle",
        element: <Vehicle></Vehicle>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/buyerProducts",
        element: <BuyerProduct></BuyerProduct>,
      },
      {
        path: "/dashboard/addProducts",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoutes>
            <Users></Users>
          </AdminRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
