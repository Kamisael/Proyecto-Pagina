import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import PrivateRoute  from '../PrivateRoute';



const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<PrivateRoute />} />
      <Route path="/cart" element={<PrivateRoute />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/dashboard" element={<Dashboard />} /> 

    </Routes>
  );
};

export default Routers;
