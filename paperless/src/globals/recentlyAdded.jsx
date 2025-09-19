import React from "react";
import { useAppContext } from "../context/appcontext";
import { recentlyAdded } from "../assets/assets_config";
import { assets } from "../assets/assets_config";
function RecentlyAdded() {
  const { addedDocuments } = useAppContext();
  return (
    <div className="border-1 border-gray-100 md:w-[500px] w-full rounded-sm p-2">
      <h1 className="mb-2 text-gray-500 font-bold ">Recently Added</h1>
      {addedDocuments.map((doc) => {
        return (
          <div className="mb-3">
            <div className="flex justify-between p-2 rounded.xs border-1 border-gray-100">
              <img className="h-6" src={assets.addFile} alt="" />
              <p className="text-sm text-gray-400">{doc.title}</p>
              <small className="text-sm text-gray-300">
                {new Date(doc.uploadDate).toLocaleString()}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentlyAdded;
