const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const appendData = require('./utils/appendData');
const readData = require('./utils/readData');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// To Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Homepage Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const operations = {
  plus: "+",
  minus: "-",
  into: "*",
  divide: "/",
};

// Array to store history of operations
const history = [];

// History Route
app.get("/history", (req, res) => {
    const historyData = readData(); // Read history data from historyData.json
    res.render('history', { history: historyData });
  });  

// Operation Route
app.get("*", (req, res) => {
  const route = req.params[0].split("/").slice(1);
  const expression = [];

  // Breakdown of route into segments
  for (const segment of route) {
    if (segment in operations) {
      expression.push(operations[segment]);
    } else if (!isNaN(segment)) {
      expression.push(segment);
    } else {
      return res.status(400).json({ error: "Invalid operations" });
    }
  }

  // For Mathematical Operation Response
  try {
    const expressionString = expression.join("");
    const answer = eval(expressionString);

    const operationData = {
      question: expressionString,
      answer,
    };

    // Adding operation data to history
    history.unshift(operationData);

    // Limiting history length to 20
    if (history.length > 20) {
      history.pop();
    }

    // Append operation data to historyData.json
    appendData(operationData);

    return res.json(operationData);
  } catch (error) {
    return res.status(500).json({ error: "Could not evaluate" });
  }
});

// Listen to server
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
