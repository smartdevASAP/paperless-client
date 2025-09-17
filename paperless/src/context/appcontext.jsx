import React, { useEffect, useState, createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

// Create context
export const AppContext = createContext();

// Provider component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("unauthorised");
  const [appMode, setAppMode] = useState(true);

  // user end authentication credentials
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // when the component mounts
  useEffect(() => {
    setAppMode(!appMode); // ensuring light mode by default
  }, []);

  // uploading documents global states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [document, setDocument] = useState(null);
  const [file, setFile] = useState(null);

  // documents added to paperless (persist in localStorage)
  const [addedDocuments, setAddedDocuments] = useState(() => {
    const savedDocs = localStorage.getItem("addedDocuments");
    return savedDocs ? JSON.parse(savedDocs) : [];
  });

  useEffect(() => {
    localStorage.setItem("addedDocuments", JSON.stringify(addedDocuments));
  }, [addedDocuments]);

  // helper to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // handle upload function
  const handleUpload = async () => {
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

    try {
      const base64File = await fileToBase64(file);
      setAddedDocuments((prev) => [
        ...prev,
        { title, description, file: base64File },
      ]);

      // clear fields after upload
      setTitle("");
      setDescription("");
      setFile(null);
      //most important part 👇👇👇
      console.log({ title, description, file });
    } catch (err) {
      toast.error("Failed to process file");
    }
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
    addedDocuments,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using context
export const useAppContext = () => {
  return useContext(AppContext);
};
