import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

// Create context
export const AppContext = createContext();

// Provider component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [appMode, setAppMode] = useState(true);
  //user end authentication credentials
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //when the component mounts;
  useEffect(() => {
    setAppMode(!appMode);
  }, []);
  // Values to pass down the component tree
  const value = {
    user,
    setUser,
    setAppMode,
    appMode,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using context
export const useAppContext = () => {
  return useContext(AppContext);
};
