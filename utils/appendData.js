const fs = require('fs');

module.exports = function (data) {
  let historyArray = [];

  try {
    const jsonData = fs.readFileSync('historyData.json', 'utf8');
    historyArray = JSON.parse(jsonData);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }

  if (historyArray.length >= 20) {
    historyArray.shift();
  }

  historyArray.push(data);

  fs.writeFile('historyData.json', JSON.stringify(historyArray, null, 2), writeErr => {
    if (writeErr) {
      console.error('Error writing file:', writeErr);
    } else {
      console.log('Successfully stored history!');
    }
  });
};
