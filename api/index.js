const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sssingh1808:Aua8tD8B96rt4EBk@real-estate.cpk2ij8.mongodb.net/Real-Estate"
  )
  .then(() => {
    console.log("connected to server");
  })
  .catch((e) => {
    console.log("Connection error :-", e);
  });

const app = express();

app.listen(3000, () => {
  console.log("listening on 3000!!!");
});
