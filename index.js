// console.log("Hello Hy");
// console.log("Ha Bhai");
// console.log("Kaisay hun ustaad");
// let fs = require("fs");
// let data = fs.readFileSync("info.txt","utf-8");
// console.log(data);
// console.log("...The Ending Statement...");
// fs.readFile("info.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("...The Ending Statement...");
// fs.writeFileSync("Mydata.txt","This is FS Modules");
// let data = fs.readFileSync("Mydata.txt","utf-8");
// console.log(data);
// fs.appendFileSync("Mydata.txt","\n Hy I Am Mohsin Saleheen");
// fs.writeFileSync("data1.txt","Example");
// fs.unlinkSync("data1.txt");
// fs.renameSync("data.txt","myfolder/data.txt");
// fs.mkdirSync("New Folder");
// fs.renameSync("Mydata.txt","New Folder/Mydata.txt");
// fs.readdirSync("./");
// fs.writeFileSync("hhh.txt","Hello");
// fs.existsSync("mm.txt");
// HTTP Module
// let http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("Response From Server... Mohsin");
//   res.end();
// });
// server.listen(3000, "localhost", () => {
//   console.log("Server Running At http://localhost:3000");
// });
// http
//   .createServer(function (rwq, res) {
//     res.setHeader("Content-Type", "text/plain");
//     res.write("Response From Server");
//     res.end();
//   })
//   .listen(3000, "localhost", () => {
//     console.log("Server Running At http://localhost:3000");
//   });
// Url Module
const url = require('url');
// let adr = 'https://www.example.com/category/search?name=Ali&Age=21#section3'
// const myurl =url.parse(adr,true);
// console.log(myurl)
const http = require('http');
http.createServer((req,res)=>{
    res.write("Response From Server..");
    console.log(req.url)
    res.end();
}).listen(3000,'localhost',()=>{
    console.log("Our server is runing at http://localhost:3000")
})