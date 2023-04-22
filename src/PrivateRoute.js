import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../src/Auth";

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  console.log("currentUser:", currentUser);

  return currentUser ? <Outlet/> : <Navigate to="/login" />; 
}

export default PrivateRoute;
