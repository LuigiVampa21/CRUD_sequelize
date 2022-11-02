require("dotenv").config();
// require("./auth/passport");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
// const startDB = require("./config/connectDB");

const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

const authRoute = require("./routes/authRoute");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("INDEX");
});

app.use("/api/v1/auth", authRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  // startDB();
  console.log(`Server is listening on port: ${PORT}`);
});
