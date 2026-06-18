import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    // Function to store token in localStorage
  const sotreTokenInLocalStorage = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // LogIn function to set token in state and localStorage
   let isLoggedIn = !!token;

  // Logout function to clear token from localStorage
  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ sotreTokenInLocalStorage, logoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
