import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

// Create context
export const AppContext = createContext();

// Provider component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [appMode, setAppMode] = useState(true);

  //when the component mounts;
  useEffect(() => {
    setAppMode(true);
  }, []);
  // Values you want to share
  const value = {
    user,
    setUser,
    setAppMode,
    appMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using context
export const useAppContext = () => {
  return useContext(AppContext);
};
