const express = require("express");
const app = require("./app.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//configuring the environment variables
dotenv.config({ path: "./config.env" });

//mongo DB connection URI

const databaseFunction = async () => {
  try {
    await mongoose
      .connect(process.env.CONNECTION_URI)
      .then(console.log("Database connected succesfully"));
  } catch (err) {
    console.log(err.message);
  }
};
databaseFunction();

const PORT = process.env.PORT || 8000;
//listening to the server port
app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
