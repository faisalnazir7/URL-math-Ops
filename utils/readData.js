const fs = require('fs');
const path = require('path');

function readData() {
  const filePath = path.join(__dirname, '..', 'historyData.json'); // Adjust the file path
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const historyArray = JSON.parse(jsonData);
    return historyArray;
  } catch (error) {
    console.error('Error reading history data:', error);
    return [];
  }
}

module.exports = readData;
