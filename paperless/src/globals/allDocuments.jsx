import React from "react";
import { Eye, Share2 } from "lucide-react"; // 👈 added Share icon
import { useAppContext } from "../context/appcontext";
import { assets } from "../assets/assets_config";

function AllDocuments() {
  const { addedDocuments } = useAppContext();

  // 👇 open file in new tab
  const handleOpenFile = (file) => {
    window.open(file, "_blank");
  };

  // 👇 share file (works on WhatsApp, Messages, etc.)
  const handleShare = async (doc) => {
    // check if file is a valid URL
    const isUrl = /^https?:\/\//.test(doc.file);

    if (navigator.share && isUrl) {
      try {
        await navigator.share({
          title: doc.title,
          text: "Check out this document:",
          url: doc.file,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // fallback: copy the base64 or URL
      navigator.clipboard.writeText(doc.file);
      alert("Document link copied! Paste it in WhatsApp or anywhere to share.");
    }
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-end">
        <h1 className="md:text-2xl text-lg font-bold text-gray-600 mb-3">
          All Documents
        </h1>
        <h4 className="hidden md:inline-block text-gray-400 font-sm">
          Quick Actions
        </h4>
      </div>

      {addedDocuments.map((doc, index) => (
        <div
          key={index}
          className="border mb-4 flex flex-col md:flex-row border-gray-100 p-3 rounded-md justify-between items-start md:items-center gap-3"
        >
          {/* Document Info */}
          <div
            className="flex items-center gap-3 w-full md:w-auto cursor-pointer"
            onClick={() => handleOpenFile(doc.file)}
          >
            <img
              src={assets.addFile}
              alt=""
              className="w-10 h-10 object-cover rounded"
            />
            <p className="text-gray-700 font-medium text-sm md:text-base truncate">
              {doc.title}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 w-full md:w-auto">
            {/* Open Button */}
            <button
              onClick={() => handleOpenFile(doc.file)}
              className="flex items-center justify-center gap-1 px-3 py-2 text-xs md:text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition w-1/2 md:w-auto"
            >
              <Eye size={16} />
              <span className="sm:inline">Open</span>
            </button>

            {/* Share Button */}
            <button
              onClick={() => handleShare(doc)}
              className="flex items-center justify-center gap-1 px-3 py-2 text-xs md:text-sm text-white bg-green-500 rounded-md hover:bg-green-600 transition w-1/2 md:w-auto"
            >
              <Share2 size={16} />
              <span className="sm:inline">Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllDocuments;
