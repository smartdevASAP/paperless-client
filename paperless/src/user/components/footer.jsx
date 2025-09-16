import React from "react";
import { assets } from "../../assets/assets_config";
import { useAppContext } from "../../context/appcontext";
function Footer() {
  const { appMode } = useAppContext();
  return (
    <div>
      <>
        <footer
          id="support"
          className="flex flex-col items-center justify-around w-full py-16 text-sm   text-gray-400 "
        >
          {!appMode ? (
            <img src={assets.logo} alt="" />
          ) : (
            <img src={assets.dark_logo} alt="" />
          )}
          <p className="mt-4 text-center">
            Copyright © 2025 <a href="https://prebuiltui.com">paperless</a>. All
            rights reservered.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="font-medium text-gray-400 transition-all">
              reach out
            </a>
            <div className="h-4 w-px "></div>
            <a href="#" className="font-medium text-gray-400 transition-all">
              Get Started
            </a>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;
