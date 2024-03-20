const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../models/User.model.js");
const { errorHandler } = require("../utils/error.js");

const getUsers = (req, res) => {
  try {
    res.send({ msg: "All users details.." });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const signupHandler = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 5);
  const lowerCaseEmail = email.toLowerCase();
  try {
    await new UserModel({
      username,
      email: lowerCaseEmail,
      password: hashPassword,
    }).save();
    res.send({ msg: "user added successfully..!!" });
  } catch (error) {
    next(error);
  }
};

const signinHandler = async (req, res, next) => {
  const { email, password } = req.body;
  const lowerCaseEmail = email.toLowerCase();
  try {
    const isValidUser = await UserModel.findOne({ email: lowerCaseEmail });
    if (!isValidUser) return next(errorHandler(404, "User not found"));
    const isValidPassword = bcrypt.compareSync(password, isValidUser.password);
    if (!isValidPassword) return next(errorHandler(401, "Wrong credentials"));
    const token = jwt.sign({ id: isValidUser._id }, process.env.JWT_SECRET);
    // to remove the password from the response and send the rest details.
    const { password: pass, ...rest } = isValidUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log("error from catch block");
    next(error);
  }
};

module.exports = { getUsers, signupHandler, signinHandler };
