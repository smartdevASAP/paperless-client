const cloudinary = require("cloudinary").v2;
const fs = require("fs");

exports.uploadFile = async (req, res) => {
  try {
    console.log("File received:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload to Cloudinary with resource_type auto
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto", // 👈 important!
      folder: "paperless_uploads",
    });

    // Remove file from local uploads after success
    fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "File upload failed" });
  } finally {
    //adding a finally block;
    if (req.file && req.file.path) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error("Failed to delete temp file:", err);
      });
    }
  }
};
