const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("TEST CRUD SQLZ");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listenning on port: ${port}`);
});
