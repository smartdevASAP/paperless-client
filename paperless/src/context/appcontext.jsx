import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

// Create context
export const AppContext = createContext();

// Provider component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("unauthorised");
  const [appMode, setAppMode] = useState(true);
  //user end authentication credentials
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //when the component mounts;
  useEffect(() => {
    //ensuring light mode by default
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
    username,
    setUsername,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using context
export const useAppContext = () => {
  return useContext(AppContext);
};
