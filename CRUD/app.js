const express = require("express");
const app = express();
const models = require("./models");

// CREATE TASK

const task = models.task.build({
  title: "feed the fish",
  iscompleted: false,
});

task.save();

// DELETE TASK

models.task
  .destroy({
    where: {
      title: "mow the lawn",
    },
  })
  .then();

// SEARCH TASK
models.task.findAll().then(task => {
  console.log(task);
});

models.task
  .findOne({
    //   findById
    where: {
      title: "mow the lawn",
    },
  })
  .then(task => {
    console.log(task);
  });

app.get("/", (req, res) => {
  res.send("TEST CRUD SQLZ");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listenning on port: ${port}`);
});
