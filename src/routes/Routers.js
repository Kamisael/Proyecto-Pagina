import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Mapa from "../pages/Mapa";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import Restaurantes from "../pages/Restaurantes";
import PrivateRoute from "./PrivateRoute";


function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods"element={<PrivateRoute><AllFoods /></PrivateRoute>}/>
      <Route path="/foods/:id" element={<PrivateRoute><FoodDetails /> </PrivateRoute>} />
      <Route path="/cart" element={<PrivateRoute><Cart /> </PrivateRoute>} />
      <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mapa" element={<PrivateRoute><Mapa /></PrivateRoute>} />
    </Routes>
  );
}

export default Routers;
