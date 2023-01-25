const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

connect();

app.get("/test", (req, res) => {
  res.json("test ok");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Port is: ${PORT}`);
});
