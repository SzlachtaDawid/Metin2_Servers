import React from "react";

type ContextValue = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = React.createContext<ContextValue>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});
AuthContext.displayName = "AuthContext";
export default AuthContext;
