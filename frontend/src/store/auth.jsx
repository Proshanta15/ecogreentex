import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`

  // Function to store token in localStorage
  const sotreTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // LogIn function to set token in state and localStorage
  let isLoggedIn = !!token;

  // Logout function to clear token from localStorage
  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  //JWT token validation and user authentication logic can be added here if needed

  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/auth/user`, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        // setIsLoading(false);
      } else {
        // setIsLoading(false);
      }
    } catch (error) {
      console.error("Error during user authentication:", error);
    }
  }

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ sotreTokenInLocalStorage, logoutUser, isLoggedIn, user, authorizationToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
