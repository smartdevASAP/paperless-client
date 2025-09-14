const express = require("express");
const multer = require("multer");
const connectCloudinary = require("../configs/cloudinary.js");
const cloudinary = require("cloudinary").v2;

const router = express.Router();

// Multer storage to store file temporarily in memory
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Upload route
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      // optional folder
      folder: "paperless_uploads",
    });

    res.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "File upload failed" });
  }
});

module.exports = router;
