import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { appContextProvider } from "./context/appcontext.jsx";
import "./index.css";
import App from "./App.jsx";
import { AppContextProvider } from "./context/appcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
