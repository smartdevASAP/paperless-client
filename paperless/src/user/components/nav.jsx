import React from "react";
import { assets } from "../../assets/assets_config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appcontext.jsx";
function Nav() {
  const { appMode, setAppMode } = useAppContext();
  const [buttonMode, setButtonMode] = useState(true);
  const [menuToggled, setMenuToggled] = useState("");
  //swtiching the img from light to dark
  const buttonHandlerFunction = () => {
    setButtonMode(!buttonMode);
    //switching from light to dark mode
    setAppMode(!appMode);
  };
  //setting default state when component mounts;
  useEffect(() => {
    setMenuToggled("");
  }, []);
  //local state on the menu ui/ux

  return (
    <nav className="py-2  w-[90vw] mx-auto border-b-1 border-gray-100 flex justify-between items-center">
      {!appMode ? (
        <img src={assets.logo} alt="" />
      ) : (
        <img src={assets.dark_logo} alt="" />
      )}
      <div>
        <ul
          className={`hidden md:flex gap-8  ${
            appMode ? "text-white" : "text-gray-600"
          } text-xs`}
        >
          <a
            href="#about"
            onClick={() => setMenuToggled("about")}
            className={`${
              menuToggled === "about" ? "text-blue-600" : ""
            } cursor-pointer`}
          >
            about
          </a>
          <a
            href="#home"
            onClick={() => setMenuToggled("features")}
            className={`${
              menuToggled === "features" ? "text-blue-600" : ""
            } cursor-pointer`}
          >
            features
          </a>

          <a
            href="#support"
            onClick={() => setMenuToggled("support")}
            className={`${
              menuToggled === "support" ? "text-blue-600" : ""
            } cursor-pointer`}
          >
            support
          </a>
        </ul>
      </div>
      <div className="flex gap-8 items-center">
        <button className="hover:cursor-pointer">
          <img
            onClick={() => buttonHandlerFunction()}
            className="p-2 w-[33.3px] h-[33.33px] border-1 border-gray-200 rounded-sm"
            src={buttonMode ? assets.sun : assets.moon}
            alt=""
          />
        </button>
        <Link to="/authentication" className="">
          <button className="hidden hover:cursor-pointer md:flex md:p-2 md:px-4 px-2 py-1 rounded-xs text-white bg-blue-500">
            sign up
          </button>
        </Link>
        <Link to="/authentication" className="">
          <button className="md:py-2 hidden hover:cursor-pointer md:flex  md:px-4 px-2 py-1 text-gray-600 bg-white border-1 border-blue-300 rounded-xs">
            login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
