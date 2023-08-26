const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

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

// Operation Route
app.get("*", (req, res) => {
  const route = req.params[0].split("/").slice(1);
  const expression = [];

  //Breakdown of route into segments
  for (const segment of route) {
    if (segment in operations) {
      expression.push(operations[segment]);
    } else if (!isNaN(segment)) {
      expression.push(segment);
    } else {
      return res.status(400).json({ error: "Invalid operations" });
    }
  }

  //For Mathematical Operation Response
  try {
    const expressionString = expression.join("");
    const answer = eval(expressionString);

    const operationData = {
      question: expressionString,
      answer,
    };

    return res.json(operationData);
  } catch (error) {
    return res.status(500).json({ error: "Could not evaluate" });
  }
});

// Listen to server
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
