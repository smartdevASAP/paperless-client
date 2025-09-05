const express = require("express");
const app = require("./app.js");
const dotenv = require("dotenv");
//configuring the environment variables
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8000;
//listening to the server port
app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
