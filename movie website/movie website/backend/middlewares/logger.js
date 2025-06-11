const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs.txt'); // Log file

const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  
  // Append log to the file
  fs.appendFile(logFilePath, log, (err) => {
    if (err) console.error('Logging failed:', err);
  });

  console.log(log.trim()); // Also log to console
  next(); // Proceed to the next middleware
};

module.exports = logger;
