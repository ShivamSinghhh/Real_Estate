const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User.model.js");
const getUsers = (req, res) => {
  try {
    res.send({ msg: "All users details.." });
  } catch (error) {
    res.send({ msg: error.message });
  }
};

const signupHandler = async (req, res,next) => {
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
    next(error)
  }
};

module.exports = { getUsers, signupHandler };
