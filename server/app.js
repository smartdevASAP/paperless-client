const express = require("express");
const app = express();

//adding document middleware
app.use(express.json());

//adding a test command
app.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = app;
