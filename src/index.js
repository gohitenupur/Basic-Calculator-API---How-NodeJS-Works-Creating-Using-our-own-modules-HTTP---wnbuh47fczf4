const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// GET request for the home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// POST request for addition
app.post("/add", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else if (num1 < -1000000 || num2 < -1000000 || num1 + num2 < -1000000) {
    res.json({
      status: "error",
      message: "Underflow"
    });
  } else if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
    res.json({
      status: "error",
      message: "Overflow"
    });
  } else {
    const sum = num1 + num2;
    res.json({
      status: "success",
      message: "The sum of given two numbers",
      sum: sum
    });
  }
});

// POST request for subtraction
app.post("/sub", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
    res.json({
      status: "error",
      message: "Underflow"
    });
  } else if (num1 > 1000000 || num2 > 1000000 || num1 - num2 > 1000000) {
    res.json({
      status: "error",
      message: "Overflow"
    });
  } else {
    const difference = num1 - num2;
    res.json({
      status: "success",
      message: "The difference of given two numbers",
      difference: difference
    });
  }
});

// POST request for multiplication
app.post("/multiply", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else if (num1 < -1000000 || num2 < -1000000 || num1 * num2 < -1000000) {
    res.json({
      status: "error",
      message: "Underflow"
    });
  } else if (num1 > 1000000 || num2 > 1000000 || num1 * num2 > 1000000) {
    res.json({
      status: "error",
      message: "Overflow"
    });
  } else {
    const result = num1 * num2;
    res.json({
      status: "success",
      message: "The product of given numbers",
      result: result
    });
  }
});
app.post("/divide", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types"
    });
  } else if (num1 < -1000000 || num2 < -1000000 || num1 * num2 < -1000000) {
    res.json({
      status: "error",
      message: "Underflow"
    });
  } else if (num1 > 1000000 || num2 > 1000000 || num1 * num2 > 1000000) {
    res.json({
      status: "error",
      message: "Overflow"
    });
  } else if (num2 === 0) {
    res.json({
      status: "error",
      message: "Cannot divide by zero",
      div: null
    });
  } else {
    const result = num1 / num2;
    res.json({
      status: "success",
      message: "The product of given numbers",
      result: result
    });
  }
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
