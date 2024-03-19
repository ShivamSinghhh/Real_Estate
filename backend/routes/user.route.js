const express = require("express");
const { UserModel } = require("../models/User.model");
const {getUsers} = require("../controllers/user.controller")

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/adduser", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    await UserModel({ username, email, password }).save();
    res.send({ msg: "User added successfully" });
  } catch (error) {
    console.log("error adding user", error);
  }
});

module.exports = { userRouter };
