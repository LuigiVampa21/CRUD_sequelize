require("dotenv").config();
require("./models/association");
const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
const productRoute = require("./routes/productRoute");
const reviewRoute = require("./routes/reviewRoute");

const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("INDEX");
});

app.use("/api/v1/product", productRoute);
app.use("/api/v1/reviews", reviewRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
