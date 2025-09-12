const express = require("express");
const app = express();
const route = require("../server/routes/user_routes.js");
const cookieParser = require("cookie-parser");
//adding document middleware
app.use(cookieParser());
app.use(express.json());

//adding a test command
app.use("/home", route);

module.exports = app;
