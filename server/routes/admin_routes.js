const express = require("express");
const routes = express.Router();
const middlewares = require("../middlewares/auth_user.js");
const admin_controllers = require("../controllers/admin_controllers/admincontrolls.js");

routes.post("/register", admin_controllers.registerAdmin);
routes.post("/login", admin_controllers.loginAdmin);
routes.post("/logout", middlewares.auth_user, admin_controllers.logout_admin);
module.exports = routes;
