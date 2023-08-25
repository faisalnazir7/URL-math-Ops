const dotenv = require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT;

// Homepage Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(express.static(path.join(__dirname, 'public')));

// Listen to server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
