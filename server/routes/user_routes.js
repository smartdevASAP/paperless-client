const express = require("express");
const route = express.Router();
const user_functions = require("../controllers/user_controllers/user_controllers.js");

route.get("/ping", user_functions.pingTrigger);
route.post("/signin", user_functions.sign_user);

module.exports = route;
