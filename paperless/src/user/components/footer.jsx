import React from "react";
import { assets } from "../../assets/assets_config";
function Footer() {
  return (
    <div>
      <>
        <footer className="flex flex-col items-center justify-around w-full py-16 text-sm  text-gray-800/70">
          <img src={assets.logo} alt="" />
          <p className="mt-4 text-center">
            Copyright © 2025 <a href="https://prebuiltui.com">paperless</a>. All
            rights reservered.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-black transition-all"
            >
              Brand Guidelines
            </a>
            <div className="h-4 w-px bg-black/20"></div>
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-black transition-all"
            >
              Trademark Policy
            </a>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;
