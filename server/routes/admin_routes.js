const express = require("express");
const routes = express.Router();
const admin_controllers = require("../controllers/admin_controllers/admincontrolls.js");

routes.post("/register", admin_controllers.registerAdmin);
routes.post("/login", admin_controllers.loginAdmin);
module.exports = routes;
