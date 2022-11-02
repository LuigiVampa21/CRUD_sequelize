require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const startDB = require("./config/connectDB");
const gigRoutes = require("./routes/gigRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("INDEX");
});

app.use("/api/v1/gig", gigRoutes);

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  startDB();
  console.log(`Server is listening on port: ${PORT}`);
});
