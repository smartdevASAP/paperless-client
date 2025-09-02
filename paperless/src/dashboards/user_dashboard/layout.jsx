import React from "react";
import DashHome from "./dashHome.jsx";
import Documents from "./documents.jsx";
import Upload from "./upload.jsx";
import Sidebar from "./sidebar.jsx";
import Settings from "./settings.jsx";
import { Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <hr className="w-px bg-gray-200 h-screen border-0" />
      <Routes>
        <Route element={<DashHome />} path="/dashHome" />
        <Route element={<Documents />} path="/documents" />
        <Route element={<Upload />} path="/upload" />
        <Route element={<Settings />} path="/settings" />
      </Routes>
    </div>
  );
}

export default Layout;
