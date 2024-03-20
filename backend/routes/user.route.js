const express = require("express");
const {getUsers, signupHandler, signinHandler} = require("../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/signup", signupHandler);
userRouter.post("/signin", signinHandler);

module.exports = { userRouter };
