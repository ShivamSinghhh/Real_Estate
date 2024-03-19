const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: "string", required: true, unique: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
