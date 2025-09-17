import React from "react";
import { assets } from "../assets/assets_config";
import { Link } from "react-router-dom";
function AddFile() {
  return (
    <>
      <nav className="p-2">
        <div className="flex items-center justify-between">
          <h1 className="md:text-2xl text-xl font-bold text-gray-600">
            {" "}
            Dashboard
          </h1>
          <div className="md:flex hidden bg-gray-100 items center w-[200px] items-center justify-between px-2 py-1 rounded-sm ">
            <img src={assets.search} alt="" />
            <p className="text-xs text-gray-500 font-medium">Search</p>
          </div>
        </div>
      </nav>
      {/* HOME SECTION */}
      <section className="mt-8 p-2 border-1 border-gray-100 rounded-sm">
        <div className="w-full p-2 flex gap-4 rounded-sm">
          <img src={assets.addFile} alt="" />
          <div className="p-2">
            <p className="text-gray-400 text-xs md:text-sm  mb-5 w-full ">
              Upload and store your papers in paperless with extreme ease
            </p>
            <Link to="/user-dashboard/upload">
              <button className="py-2 px-3 text-xs md:text-sm rounded-xs  md:rounded-sm bg-blue-500 text-white text-center">
                Add PDF file
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddFile;
