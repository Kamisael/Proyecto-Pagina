import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [lastVisitedPage, setLastVisitedPage] = useState("");

  const login = (username) => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername("");
  };

  const setLastPage = (page) => {
    setLastVisitedPage(page);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, username, login, logout, setLastPage }}
    >
      {children}
    </AuthContext.Provider>
  );
};
