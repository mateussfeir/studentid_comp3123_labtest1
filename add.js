const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

// Create Logs directory if not exists
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

process.chdir(logsDir); // change working directory

for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}`);
  console.log(`Created file: ${fileName}`);
}
