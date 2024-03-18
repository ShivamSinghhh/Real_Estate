const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// const connection = mongoose.connect('mongodb://127.0.0.1:27017');
const connection = mongoose.connect(process.env.mongoDB_url);

module.exports = { connection };
