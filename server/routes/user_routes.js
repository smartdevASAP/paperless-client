const express = require("express");
const route = express.Router();
const user_functions = require("../controllers/user_controllers/user_controllers.js");

route.get("/ping", user_functions.pingTrigger);

module.exports = route;
