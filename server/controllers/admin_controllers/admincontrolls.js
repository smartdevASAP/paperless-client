const express = require("express");
const Admin = require("../../models/adminmodel.js");
const bcrypt = require("bcryptjs");

exports.registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if an admin already exists
    const existingAdmin = await Admin.findOne({});
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message:
          "Only one admin is allowed. Ask for permission to be onboarded.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the admin
    const admin = await Admin.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      admin,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error occurred in registering the admin: " + err.message,
    });
  }
};
//logging in admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // You’ll probably want to generate a JWT here
    res.status(200).json({
      success: true,
      message: "Login successful",
      admin,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error occurred in logging in the admin: " + err.message,
    });
  }
};
