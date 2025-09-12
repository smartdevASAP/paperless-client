const express = require("express");
const app = require("./app.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//configuring the environment variables
dotenv.config({ path: "./config.env" });

const databaseFunction = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URI).then(() => {
      console.log("Database connected succesfully");
    });
  } catch (err) {
    if (err) console.log(err.message);
    console.log("error occured when trying to connect to the database");
  }
};
databaseFunction();

const PORT = process.env.PORT || 8000;
//listening to the server port
app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
