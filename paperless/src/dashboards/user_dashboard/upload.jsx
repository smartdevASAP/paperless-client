import React, { useState } from "react";
import { assets } from "../../assets/assets_config";
import { UploadCloud } from "lucide-react";
import { useAppContext } from "../../context/appcontext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Upload() {
  //destructuring the context;
  const {
    setTitle,
    title,
    handleUpload,
    setDescription,
    description,
    file,
    setFile,
  } = useAppContext();
  //files added
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  // //sending files to the backend;
  // const {data}=await axios.post("/home/upload",)
  return (
    <div className="p-4">
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Page Title */}
      <h1 className="md:text-2xl mb-6 text-lg font-bold text-gray-600">
        Upload
      </h1>
      {/* Upload Section */}
      <section className="md:w-[420px] w-full bg-white p-4 rounded-sm shadow-sm border border-gray-100">
        <h2 className="font-semibold text-gray-700">Add PDF document</h2>
        <p className="text-xs text-gray-400 mb-6">
          Upload and save your documents securely in Paperless.
        </p>
        {/* Document name */}
        <div className="mb-4">
          <label className="text-sm text-gray-500 mb-1 block">
            Document name
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full border border-gray-200 p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. National ID"
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label className="text-sm text-gray-500 mb-1 block">
            Description
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="w-full border border-gray-200 p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. my national identity card"
          />
        </div>
        {/* File Upload */}
        <div className="p-6 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:border-blue-400 transition">
          <UploadCloud className="text-gray-400 w-10 h-10" />
          <p className="text-sm text-gray-500">
            {file ? file.name : "Drag & drop or click to upload"}
          </p>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
            id="fileUpload"
          />
          <label
            htmlFor="fileUpload"
            className="px-3 py-1 bg-blue-500 text-white text-xs rounded-sm cursor-pointer hover:bg-blue-600 transition"
          >
            Choose File
          </label>
        </div>
        {/* Metadata */}
        <div className="mt-6 text-sm text-gray-500 space-y-1">
          <p>
            <span className="font-medium">Created at:</span>{" "}
            {new Date().toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium">Created by:</span> You
          </p>
        </div>
        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button className="px-4 py-2 text-sm rounded-sm border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="px-4 py-2 text-sm rounded-sm bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Upload
          </button>
        </div>
      </section>
    </div>
  );
}

export default Upload;
