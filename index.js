// console.log("Hello Hy");
// console.log("Ha Bhai");
// console.log("Kaisay hun ustaad");
let fs = require("fs");
// let data = fs.readFileSync("info.txt","utf-8");
// console.log(data);
// console.log("...The Ending Statement...");
fs.readFile("info.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("...The Ending Statement...");
