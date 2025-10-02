const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

// Check if Logs directory exists
if (fs.existsSync(logsDir)) {
  // Read all files inside Logs
  fs.readdirSync(logsDir).forEach(file => {
    const filePath = path.join(logsDir, file);
    fs.unlinkSync(filePath); // delete file
    console.log(`Deleted file: ${file}`);
  });

  // Remove the Logs directory
  fs.rmdirSync(logsDir);
  console.log("Logs directory removed.");
} else {
  console.log("Logs directory does not exist.");
}
