const express = require("express");
const app = express();
const route = require("../server/routes/user_routes.js");
//adding document middleware
app.use(express.json());

//adding a test command
app.use("/home", route);

module.exports = app;
