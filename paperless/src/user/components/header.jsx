import React from "react";
import { assets } from "../../assets/assets_config";
import { useAppContext } from "../../context/appcontext";
import { Link } from "react-router-dom";
function Header() {
  const { appMode, setAppMode } = useAppContext();
  return (
    <div id="" className="border-gray-200 relative border-b pb-8">
      {appMode ? (
        <img className="absolute top-2 left-2" src={assets.eclipse} alt="" />
      ) : null}
      <div className="w-[60vw]  mx-auto mt-8">
        <h1
          className={`text-center font-bold text-2xl md:text-4xl ${
            !appMode ? "text-gray-600" : "text-white"
          } mb-8`}
        >
          All Your Documents In One Place, saving the hustle of carrying bulky
          papers
        </h1>
        <p className="text-sm text-gray-400 text-center">
          Paperless lets you upload, store, and manage your PDFs securely in the
          cloud so you’ll never worry about losing or carrying physical copies
          again.
        </p>

        {/* Image wrapper to center */}
        <div className="flex justify-center mt-4 mb-4">
          {!appMode ? (
            <img className="p-2" src={assets.header} alt="Paperless Header" />
          ) : (
            <img src={assets.header_dark} alt="" />
          )}
        </div>

        <Link
          className=" text-center p-3 flex justify-center text-white bg-blue-500 w-full md:w-[250px] mx-auto rounded-xs"
          to="authentication"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Header;
