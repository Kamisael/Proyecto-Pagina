import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "./useauth";
import { useNavigate } from 'react-router-dom';
import Login from "../Login";
import '../styles/PrivateRoute.css';

const PrivateRoute = ({ children }) => {
  const user = useAuth();
  const navigate = useNavigate();

  if (user === null) {
    // Puedes mostrar un mensaje de carga o cualquier otro componente mientras se verifica la autenticación
    return <div className="private-route-message">
        <p className="text">¡Hola!
         Primero debes iniciar sesion para poder gozar de nuestros servicios, sin ti cositas no seria lo que nos haces ser.</p>
        </div>
  }

  if (!user) {
    navigate("/login");
    return (
      <div className="private-route-message">
        <p>Debes iniciar sesión</p>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;
