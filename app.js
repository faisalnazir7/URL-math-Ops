const dotenv = require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;

// Homepage Route
app.get('/', (req, res) => {
  res.send('Home Route');
});

// Listen to server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
