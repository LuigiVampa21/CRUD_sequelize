require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.PSQL_USERNAME}:${process.env.PSQL_PASSWORD}@localhost:3000/${process.env.PSQL_DATABASE_NAME}`
);
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("INDEX");
});

const port = 5000;
app.listen(port, () => {
  start();
  console.log(`Server is listening on port: ${port}`);
});
