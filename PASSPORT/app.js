require("dotenv").config();
const express = require("express");
const path = require("path");
const startDB = require("./config/connectDB");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("INDEX");
});

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  startDB();
  console.log(`Server is listening on port: ${PORT}`);
});
