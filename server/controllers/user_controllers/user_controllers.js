const express = require("express");
const User = require("../../models/usermodel.js");
//const route testing
exports.pingTrigger = (req, res) => {
  res.status(200).json({
    status: "true",
    message: "API endpoint working as expected",
  });
};

//user related endpoints
//creating a new user in the DB
exports.sign_user = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      success: false,
      message: `error is ${err.message}`,
    });
  }
};
