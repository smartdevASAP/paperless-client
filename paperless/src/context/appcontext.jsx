import React, { useEffect, useState, createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
// Create context
export const AppContext = createContext();

// Axios instance with backend base URL
axios.defaults.withCredentials = true;
const BASE_URL = "http://localhost:5000";
axios.defaults.baseURL = BASE_URL;

// Provider component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("unauthorised");
  const [paperlessUser, setPaperlessUser] = useState("");
  const [appMode, setAppMode] = useState(true);
  const [loading, setLoading] = useState(false); //for setting the loading spinners
  // user end authentication credentials
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // when the component mounts
  useEffect(() => {
    // ensuring light mode by default
    setAppMode(!appMode);
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
  // const handleUpload = async () => {
  //   if (!file) return toast.error("Choose a file to add to paperless");
  //   if (!title || !description)
  //     return toast.error("Missing title or description");

  //   try {
  //     const formData = new FormData();
  //     formData.append("title", title);
  //     formData.append("description", description);
  //     formData.append("file", file); // 👈 raw file, not base64

  //     const { data } = await axios.post("/api/upload", formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });

  //     if (data.success) {
  //       toast.success("Document uploaded successfully");
  //       setTitle("");
  //       setDescription("");
  //       setFile(null);
  //       setAddedDocuments((prev) => [
  //         ...prev,
  //         {
  //           title: data.document.title,
  //           description: data.document.description,
  //           file: data.document.fileURL,
  //         }, // ✅ always use file
  //       ]);
  //     } else {
  //       toast.error("Error occurred while uploading");
  //     }
  //   } catch (err) {
  //     toast.error("Upload failed");
  //     console.error(err);
  //   }
  // };
  //----AI CODE
  const handleUpload = async () => {
    if (!file) return toast.error("Choose a file to add to paperless");
    if (!title || !description)
      return toast.error("Missing title or description");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("file", file);

      const { data } = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        toast.success("Document uploaded successfully");
        setTitle("");
        setDescription("");
        setFile(null);

        setAddedDocuments((prev) => [
          ...prev,
          {
            title: data.document.title,
            description: data.document.description,
            file: data.document.fileURL, // 👈 correct URL
          },
        ]);
      } else {
        toast.error("Error occurred while uploading");
      }
    } catch (err) {
      toast.error("Upload failed");
      console.error(err);
    }
  };

  //---

  // log when state updates
  useEffect(() => {
    console.log("Updated docs:", addedDocuments);
  }, [addedDocuments]);

  //global backend first call
  const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // allows cookies/auth headers
  });

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
    paperlessUser,
    setPaperlessUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// Custom hook for using context
export const useAppContext = () => {
  return useContext(AppContext);
};
