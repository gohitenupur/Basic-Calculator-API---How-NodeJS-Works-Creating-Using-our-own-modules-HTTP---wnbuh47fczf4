const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (isNaN(num1) || isNaN(num2)) {
    return res.json({
      status: "error",
      message: "Invalid data types",
      sum: null
    });
  }
  if (num1 + num2 > 1000000) {
    return res.json({
      status: "error",
      message: "overflow",
      sum: null
    });
  }
  const sum = num1 + num2;

  res.json({
    status: "success",
    message: "The sum of given two numbers",
    sum: sum
  });
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types",
      sub: null
    });
  }

  if (num1 - num2 < -1000000) {
    res.json({
      status: "error",
      message: "underflow",
      sub: null
    });
  }

  const sub = num1 - num2;

  res.json({
    status: "success",
    message: "The difference of given two numbers",
    sub: sub
  });
});
app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types",
      multi: null
    });
  }

  if (num1 * num2 > 1000000) {
    res.json({
      status: "error",
      message: "overflow",
      multi: null
    });
  }

  const multi = num1 * num2;

  res.json({
    status: "success",
    message: "The product of given numbers",
    multi: multi
  });
});

app.post("/divide", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types",
      div: null
    });
  }

  if (num2 === 0) {
    res.json({
      status: "error",
      message: "Cannot divide by zero",
      div: null
    });
  }

  const div = num1 / num2;

  res.json({
    status: "success",
    message: "The product of given numbers",
    div: div
  });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
