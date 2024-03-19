const express = require("express");
const {getUsers, signupHandler} = require("../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/register", signupHandler);

module.exports = { userRouter };
