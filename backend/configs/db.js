const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
// To prevent mongo urls from anauthorized acess.
const connection = mongoose.connect(process.env.MONGODB_URL);

module.exports = { connection };
