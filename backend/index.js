const express = require("express");
const { connection } = require("./configs/db.js");
const { userRouter } = require("./routes/user.route.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "This is homepage." });
});

app.listen("3000", async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log("error connecting to DB", error);
  }
  console.log("listening on port 3000!!");
});

app.use("/users", userRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
