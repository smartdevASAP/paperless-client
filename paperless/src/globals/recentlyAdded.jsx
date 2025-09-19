import React from "react";
import { useAppContext } from "../context/appcontext";
import { assets } from "../assets/assets_config";
import { Eye } from "lucide-react"; // 👈 import view icon

function RecentlyAdded() {
  const { addedDocuments } = useAppContext();

  // open file in new tab
  const handleViewFile = (file) => {
    window.open(file, "_blank");
  };

  return (
    <div className="border border-gray-100 md:w-[500px] w-full rounded-sm p-2">
      <h1 className="mb-2 text-gray-500 font-bold">Recently Added</h1>
      {addedDocuments.map((doc, index) => (
        <div
          key={index}
          className="mb-3 flex justify-between items-center border border-gray-100 rounded-xs p-2"
        >
          {/* File Info */}
          <div className="flex items-center gap-2">
            <img className="h-6" src={assets.addFile} alt="file icon" />
            <p className="text-sm text-gray-400">{doc.title}</p>
          </div>

          {/* View Button with Icon */}
          <button
            onClick={() => handleViewFile(doc.file)}
            className="flex items-center gap-1 px-3 py-1 text-xs text-white bg-blue-500 rounded-xs hover:bg-blue-600 transition"
          >
            <Eye size={14} /> {/* 👈 Lucide eye icon */}
            View
          </button>
        </div>
      ))}
    </div>
  );
}

export default RecentlyAdded;
