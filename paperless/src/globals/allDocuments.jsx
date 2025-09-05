import React from "react";
import { documents } from "../assets/assets_config";
import { Printer, Share2 } from "lucide-react";

function AllDocuments() {
  return (
    <div className="p-2">
      <div className="flex justify-between items-end">
        <h1 className="md:text-2xl text-lg font-bold text-gray-600 mb-3">
          All Documents
        </h1>
        <h4 className="hidden md:inline-block  text-gray-400 font-sm ">
          Quick Actions
        </h4>
      </div>

      {documents.map((doc) => {
        return (
          <div
            key={doc.img}
            className="border mb-4 flex flex-col md:flex-row border-gray-100 p-3 rounded-md justify-between items-start md:items-center gap-3"
          >
            {/* Document Info */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <img
                src={doc.img}
                alt=""
                className="w-10 h-10 object-cover rounded"
              />
              <p className="text-gray-700 font-medium text-sm md:text-base truncate">
                {doc.text}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3 w-full md:w-auto">
              {/* Print */}
              <button className="flex items-center justify-center gap-1 px-3 py-2 text-xs md:text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition w-1/2 md:w-auto">
                <Printer size={16} />
                <span className=" sm:inline">Print</span>
              </button>

              {/* Share */}
              <button className="flex items-center justify-center gap-1 px-3 py-2 text-xs md:text-sm text-white bg-green-500 rounded-md hover:bg-green-600 transition w-1/2 md:w-auto">
                <Share2 size={16} />
                <span className="sm:inline">Share</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllDocuments;
