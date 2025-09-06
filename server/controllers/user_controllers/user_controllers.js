const express = require("express");

//const route testing
exports.pingTrigger = (req, res) => {
  res.status(200).json({
    status: "true",
    message: "API endpoint working as expected",
  });
};
//user related endpoints
