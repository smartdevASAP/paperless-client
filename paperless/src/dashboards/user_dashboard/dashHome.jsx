import React from "react";
import { assets } from "../../assets/assets_config";
import AddFile from "../../globals/addFile";
import RecentlyAdded from "../../globals/recentlyAdded";
import { Link } from "react-router-dom";
function DashHome() {
  return (
    <>
      <AddFile />
      {/* more(s) section */}
      <div className="w-full md:flex gap-8 mt-12 space-y-8 items-center">
        <RecentlyAdded />
        <div className="border-1 border-gray-100 rounded-sm p-4 flex justify-center items-center">
          <Link to="/user-dashboard/documents">
            <div className="text-center">
              {" "}
              {/* Container for the heading and image */}
              <h1 className="p-4 mb-2 text-gray-500 font-bold">See all</h1>
              <img className="p-2 mx-auto" src={assets.favorites} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DashHome;
