// console.log("Hello Hy");
// console.log("Ha Bhai");
// console.log("Kaisay hun ustaad");
// let fs = require("fs");
// let data = fs.readFileSync("hhh.txt","utf-8");
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
// const url = require('url');
// let adr = 'https://www.example.com/category/search?name=Ali&Age=21#section3'
// const myurl =url.parse(adr,true);
// console.log(myurl)
// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("Response From Server..");
//     console.log(req.url)
//     res.end();
// }).listen(3000,'localhost',()=>{
//     console.log("Our server is runing at http://localhost:3000")
// });
// Routing Module 
// const http = require("http");
// const fs = require("fs");
// http.createServer((req,res)=>{
//     if(req.url === "/"){
//         fs.readFile('./public/home.html',(err,data)=>{
//             if(err) throw err;
//             res.write(data);
//             res.end();
//         })
//     }
//     else if(req.url === "/about"){
//         fs.readFile('./public/about.html',(err,data)=>{
//             if(err) throw err;
//             res.write(data);
//             res.end();
//         })
//     }
//     else if(req.url === "/contact"){
//         fs.readFile('./public/contact.html',(err,data)=>{
//             if(err) throw err;
//             res.write(data);
//             res.end();
//         })
//     }
//     else if(req.url === "/services"){
//         fs.readFile('./public/services.html',(err,data)=>{
//             if(err) throw err;
//             res.write(data);
//             res.end();
//         })
//     }else{
//         res.write("<h1>404 Page Not Found...</h1>");
//         res.end();
//     }
// }).listen(3000,'localhost',()=>{
//     console.log("server is up and running at http://localhost:3000");
// })
// Path Module
// const path = require("path");
// let filename = 'C:\\Users\\T\\Desktop\\Node JS\\Public\\index.html';
// let filename = '\\Desktop\\Node JS\\index.html';
// console.log(path.basename(filename));
// console.log(path.basename(__filename));
// console.log(path.extname(filename))
// console.log(path.dirname(filename));
// console.log(path.join("users","category","diagrams","flowchart"));
// console.log(path.resolve("users","category","diagrams","flowchart"))
// console.log(path.parse(filename));
// console.log(path.isAbsolute(filename));
// require('./module1');
// require('./module2');
// function show1(name){
//     console.log(`Hello ${name}`);
// }
// function show2(Showname){
//     let name = "Mohsin Saleen";
//     Showname(name);
// }
// show2(show1)
// Events Module
// let events = require('events');
// let eventEmitter = new events.EventEmitter();

// var myEventHandler = () =>{
//     console.log("Order Received! Baking a Pasta.");
// }
// eventEmitter.on('order-Pasta',(size,topping)=>{
//     console.log(`Order Received! Baking a ${size} Pasta with ${topping}.`);
// });

// eventEmitter.emit('order-Pasta','large','Black Olives');
// let fs = require('fs');
// console.log("Before");
// fs.readFile("./info.txt","utf-8",(err,data)=>{
//     console.log("Content Show");
// })

// console.log("After");


//////ASSIGMENT///////
// const express = require('express');

// const app = express();
// const PORT = 3000;
// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.get('/', (req, res, next) => {
//     res.send('hello world!');

// })
// app.post('/home', (req, res, next) => {
//     const userAge = req.body.userAge
//     // console.log(userAge);
//     if (userAge > 18) {
//         res.send('You are allow in the web');
//     }else{
        
//         res.send('You are not allow in the web');
//     }
// })

// app.listen(PORT, () => {
//     console.log(`server is running, on port : http://localhost:3000`)
// })


// console.log("First");
// Promise.resolve().then(()=>{
//     console.log("Promise Callback");
// })
// setTimeout(()=>{
//     console.log("Time Out Callback");
// },0);
// setImmediate(()=>{
//     console.log("Immediate Callback");
// })
// process.nextTick(()=>{
//     console.log("NextTick CallBack");
// })
// console.log("third")
const express = require('express');
const app = express();
const PORT = 3000;

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Root route
app.get('/', (req, res) => {
    res.send("Welcome to the API! Use POST /register to test.");
});
app.post('/register', (req, res) => {
    const { name, age, country } = req.body;

    if (!name || !age || !country) {
        return res.status(400).send("Please provide name, age, and country.");
    }

    if (age < 18) {
        return res.send(`Sorry ${name}, you must be 18+ to register.`);
    }

    if (country.toLowerCase() !== "pakistan") {
        return res.send(`Sorry ${name}, this service is only for Pakistan users.`);
    }

    return res.send(`Welcome ${name}! You are registered successfully.`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});