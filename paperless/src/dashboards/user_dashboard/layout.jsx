import React from "react";
import DashHome from "./dashHome.jsx";
import Documents from "./documents.jsx";
import Upload from "./upload.jsx";
import Sidebar from "./sidebar.jsx";
import Settings from "./settings.jsx";
import { Routes, Route } from "react-router-dom";
import Test from "../../user/pages/test.jsx";
function Layout() {
  return (
    <div className="flex h-screen gap-2">
      <Sidebar />
      <hr className="w-[0.5px] h-screen bg-gray-200 border-0" />
      {/* Wrapper for routes */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Routes>
          <Route element={<DashHome />} path="/dashHome" />
          <Route element={<Documents />} path="/documents" />
          <Route element={<Upload />} path="/upload" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<Test />} path="/test" />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
