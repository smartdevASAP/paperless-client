import React from "react";
import { Eye, Share2 } from "lucide-react";
import { useAppContext } from "../context/appcontext";
import { assets } from "../assets/assets_config";

function AllDocuments() {
  const { addedDocuments } = useAppContext();

  // 👇 open file in new tab
  // const handleOpenFile = (doc) => {
  //   if (!doc) {
  //     console.error("Invalid document:", doc);
  //     alert("No file to open");
  //     return;
  //   }

  //   // ✅ use fileURL (from backend) OR fallback to file field
  //   const fileRef = doc.fileURL || doc.file;

  //   if (!fileRef) {
  //     console.error("No file found in document:", doc);
  //     alert("No file to open ⛔");
  //     return;
  //   }

  //   if (fileRef instanceof File) {
  //     const fileURL = URL.createObjectURL(fileRef);
  //     window.open(fileURL, "_blank");
  //   } else if (typeof fileRef === "string") {
  //     window.open(fileRef, "_blank");
  //   } else {
  //     console.error("Unknown file type:", fileRef);
  //     alert("Unsupported file format");
  //   }
  // };
  //ai
  // const handleOpenFile = (doc) => {
  //   if (!doc) {
  //     console.error("Invalid document:", doc);
  //     alert("No file to open");
  //     return;
  //   }

  //   const fileRef = doc.file || doc.fileURL || doc.url;
  //   if (!fileRef) {
  //     console.error("No file found in document:", doc);
  //     alert("No file to open ⛔⛔⛔");
  //     return;
  //   }

  //   // If the file is a File object (from local upload)
  //   if (fileRef instanceof File) {
  //     const fileURL = URL.createObjectURL(fileRef);
  //     window.open(fileURL, "_blank");
  //     return;
  //   }

  //   // Determine file extension
  //   const ext = fileRef.split(".").pop().toLowerCase();

  //   // Previewable in browser
  //   const inlinePreview = ["pdf", "png", "jpg", "jpeg", "gif", "webp"];

  //   if (inlinePreview.includes(ext)) {
  //     // Open directly in new tab
  //     window.open(fileRef, "_blank");
  //   } else {
  //     // Use Google Docs Viewer for other docs (Word, Excel, etc.)
  //     const googleViewer = `https://docs.google.com/viewer?url=${encodeURIComponent(
  //       fileRef
  //     )}&embedded=true`;
  //     window.open(googleViewer, "_blank");
  //   }
  // };
  // ai-2

  const handleOpenFile = (doc) => {
    if (!doc || !doc.file) {
      console.error("No file to open:", doc);
      alert("No file to open");
      return;
    }

    const fileURL = doc.file; // should be the secure_url from Cloudinary

    if (typeof fileURL === "string") {
      // open in new tab
      window.open(fileURL, "_blank");
    } else {
      console.error("Unsupported file type:", fileURL);
      alert("Unsupported file format");
    }
  };

  // 👇 share file
  const handleShare = async (doc) => {
    const fileRef = doc?.fileURL || doc?.file;

    if (!fileRef) {
      alert("No file to share");
      return;
    }

    const isUrl = typeof fileRef === "string" && /^https?:\/\//.test(fileRef);

    if (navigator.share && isUrl) {
      try {
        await navigator.share({
          title: doc.title,
          text: "Check out this document:",
          url: fileRef,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(fileRef.toString());
      alert("Document link copied! Paste it anywhere to share.");
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

      {addedDocuments.length === 0 ? (
        <p className="text-gray-400">No documents uploaded yet</p>
      ) : (
        addedDocuments.map((doc, index) => (
          <div
            key={index}
            className="border mb-4 flex flex-col md:flex-row border-gray-100 p-3 rounded-md justify-between items-start md:items-center gap-3"
          >
            {/* Document Info */}
            <div
              className="flex items-center gap-3 w-full md:w-auto cursor-pointer"
              onClick={() => handleOpenFile(doc)}
            >
              <img
                src={assets.addFile}
                alt="file-icon"
                className="w-10 h-10 object-cover rounded"
              />
              <p className="text-gray-700 font-medium text-sm md:text-base truncate">
                {doc.title || "Untitled Document"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={() => handleOpenFile(doc)}
                className="flex items-center justify-center gap-1 px-3 py-2 text-xs md:text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition w-1/2 md:w-auto"
              >
                <Eye size={16} />
                <span className="sm:inline">Open</span>
              </button>

              <button
                onClick={() => handleShare(doc)}
                className="flex items-center justify-center gap-1 px-3 py-2 text-xs md:text-sm text-white bg-green-500 rounded-md hover:bg-green-600 transition w-1/2 md:w-auto"
              >
                <Share2 size={16} />
                <span className="sm:inline">Share</span>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllDocuments;
