const express = require("express");
const multer = require("multer");
const uploadFile = require("../controllers/upload_controllers/upload_controllers.js");

const router = express.Router();

// Multer to handle file uploads to local "uploads/" folder
const upload = multer({ dest: "uploads/" });

// Route: POST /api/upload
router.post("/upload", upload.single("file"), uploadFile.uploadFile);

module.exports = router;
