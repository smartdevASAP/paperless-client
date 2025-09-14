const express = require("express");
const app = express();
const uploadRoutes = require("./routes/upload_routes.js");
const user_endpoints = require("../server/routes/user_routes.js");
const admin_endpoints = require("./routes/admin_routes.js");
const cookieParser = require("cookie-parser");
//adding document middleware
app.use(cookieParser());
app.use(express.json());
//user entry point
app.use("/home", user_endpoints);
//admin entry point
app.use("/admin", admin_endpoints);
//upload routes
app.use("/api", uploadRoutes);

module.exports = app;
