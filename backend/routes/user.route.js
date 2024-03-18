const express = require("express");
const { UserModel } = require("../models/User.model");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Welcome to User Page!");
});

userRouter.post("/adduser", async (req, res) => {
  const { name, email, pass } = req.body;
  try {
    await UserModel({ name, email, pass }).save();
    res.send({ msg: "User added successfully" });
  } catch (error) {
    console.log("error adding user", error);
  }
});

module.exports = { userRouter };
