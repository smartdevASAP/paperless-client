import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

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
  //uploading documents global functions
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [document, setDocument] = useState(null);
  //actual file;
  const [file, setFile] = useState(null);

  //documents added to paperless;
  const [addedDocuments, setAddedDocuments] = useState([]);

  //function that controlles the documents in paperless👇
  // const handleDocuments = () => {
  //   console.log(title, description, file);
  // };

  //handle upload function;
  const handleUpload = () => {
    if (!title && !description && file == null) {
      return toast.error("No details provided in the uploading process");
    }
    if (!title || !description) {
      return toast.error(
        "Missing title or description in the uploading process"
      );
    }
    if (!file) {
      return toast.error("Choose a file to add to paperless");
    }

    setAddedDocuments((prev) => [...prev, { title, description, file }]);
  };

  // log when state updates
  useEffect(() => {
    console.log("Updated docs:", addedDocuments);
  }, [addedDocuments]);

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
    title,
    setTitle,
    description,
    setDescription,
    document,
    setDocument,
    file,
    setFile,
    handleUpload,
    // handleDocuments,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using context
export const useAppContext = () => {
  return useContext(AppContext);
};
