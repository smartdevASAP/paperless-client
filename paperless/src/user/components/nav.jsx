import React from "react";
import { assets } from "../../assets/assets_config";
import { useState, useEffect } from "react";
import { useAppContext } from "../../context/appcontext.jsx";
function Nav() {
  const { appMode, setAppMode } = useAppContext();
  const [buttonMode, setButtonMode] = useState(true);
  //swtiching the img from light to dark
  const buttonHandlerFunction = () => {
    setButtonMode(!buttonMode);
    //switching from light to dark mode
    setAppMode(!appMode);
  };
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
          <li>features</li>
          <li>support</li>
          <li>about</li>
        </ul>
      </div>
      <div className="flex gap-8 items-center">
        <button className="">
          <img
            onClick={() => buttonHandlerFunction()}
            className="p-2 w-[33.3px] h-[33.33px] border-1 border-gray-200 rounded-sm"
            src={buttonMode ? assets.sun : assets.moon}
            alt=""
          />
        </button>
        <button className="hidden md:flex md:p-2 md:px-4 px-2 py-1 rounded-xs text-white bg-blue-500">
          sign up
        </button>
        <button className="md:py-2 hidden md:flex  md:px-4 px-2 py-1 text-gray-600 bg-white border-1 border-blue-300 rounded-xs">
          login
        </button>
      </div>
    </nav>
  );
}

export default Nav;
