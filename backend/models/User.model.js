const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    pass: { type: "string", required: true },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
