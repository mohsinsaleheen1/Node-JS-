let fs = require("fs");
const requestFilter = (req, res, next) => {
  const now = new Date();
  fs.appendFile(
    "log.txt",
    `\n ${now.getDate()}/ ${now.getMonth() + 1}/ ${now.getFullYear()}: ${
      req.method
    }: ${req.path}`,
    (err, data) => {
      next();
    }
  );
};
module.exports = requestFilter;
