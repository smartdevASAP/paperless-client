import React from "react";
import { assets } from "../../assets/assets_config";
import { Home, FileText, Upload, Settings } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      icon: <Home className="w-7 h-7" />,
      path: "/user-dashboard/dashHome",
    },
    {
      name: "Documents",
      icon: <FileText className="w-7 h-7" />,
      path: "/user-dashboard/documents",
    },
    {
      name: "Upload",
      icon: <Upload className="w-7 h-7" />,
      path: "/user-dashboard/upload",
    },
    {
      name: "Settings",
      icon: <Settings className="w-7 h-7" />,
      path: "/user-dashboard/settings",
    },
  ];

  return (
    <div
      className="
        bg-white  transition-all duration-300
        fixed bottom-0 left-0 w-full h-16 flex justify-around items-center border-t
        sm:static sm:w-[250px] sm:p-4  sm:border-t-0 sm:flex-col
      "
    >
      {/* Logo (only visible on desktop) */}
      <div className="hidden sm:block ml-0">
        <Link to="/">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-6 mb-12 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Menu */}
      <ul
        className="
          flex flex-row justify-around w-full 
          sm:flex-col sm:items-start sm:space-y-2 sm:w-full
        "
      >
        {menuItems.map((item) => (
          <li key={item.name} className="flex-1 sm:flex-none sm:w-full">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col sm:flex-row items-center justify-center sm:justify-start
                 gap-1 sm:gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200
                 ${
                   isActive
                     ? "bg-blue-500 text-white"
                     : "text-gray-700 hover:bg-gray-100"
                 }`
              }
            >
              {item.icon}
              <span className="text-xs sm:text-base font-medium hidden sm:inline">
                {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
