const express = require("express");
const User = require("../../models/usermodel.js");
const bcrypt = require("bcryptjs");
//const route testing
exports.pingTrigger = (req, res) => {
  res.status(200).json({
    status: "true",
    message: "API is working",
  });
};
//user related endpoints
//creating a new user in the DB
exports.sign_user = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
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

//login in a user
exports.login_user = async (req, res) => {
  const { email, password } = req.body;
  const found_user = await User.findOne({ email });
  if (!found_user) {
    return res.status(404).json({
      status: false,
      message: `user with email ${email} not found please return to sign in`,
    });
  }
  //when the user is in the DB
  try {
    if (found_user) {
      res.status(201).json({
        success: true,
        user: found_user,
      });
    }
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: `error occured: ${err.message}`,
    });
  }
};
