import React from "react";
import UseAuth from "../../Context/UseAuth";
import {  Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { usersdata } = UseAuth();

  return !usersdata.email ? <Navigate to="/login" replace /> : <Outlet />;
};

export default PrivateRoute;
