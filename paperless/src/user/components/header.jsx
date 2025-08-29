import React from "react";
import { assets } from "../../assets/assets_config";
import { useAppContext } from "../../context/appcontext";
function Header() {
  const { appMode, setAppMode } = useAppContext();
  return (
    <div className="w-[60vw] mx-auto mt-8">
      <h1
        className={`text-center font-bold text-xl md:text-2xl ${
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
        <img className="p-2" src={assets.header} alt="Paperless Header" />
      </div>

      <button className=" text-center p-3 flex justify-center text-white bg-blue-500 w-full md:w-[250px] mx-auto rounded-xs">
        Get Started
      </button>
    </div>
  );
}

export default Header;
