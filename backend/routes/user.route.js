const express = require("express");
const {getUsers, signupHandler} = require("../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/signup", signupHandler);

module.exports = { userRouter };
