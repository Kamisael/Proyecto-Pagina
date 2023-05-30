import { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Importa tu instancia de Firebase auth
import { Routes, Route, Navigate } from "react-router-dom";
const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Limpia la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
