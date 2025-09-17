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

/////////// Express JS//////////
///////////////////////////////////////
///////////////////////////////////////
// const express = require("express");

// // // Body parsers
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // Root route
// app.get("/", (req, res) => {
//   res.send("Welcome to the API! Use POST /register to test.");
// });
// app.post("/register", (req, res) => {
//   const { name, age, country } = req.body;

//   if (!name || !age || !country) {
//     return res.status(400).send("Please provide name, age, and country.");
//   }

//   if (age < 18) {
//     return res.send(`Sorry ${name}, you must be 18+ to register.`);
//   }

//   if (country.toLowerCase() !== "pakistan") {
//     return res.send(`Sorry ${name}, this service is only for Pakistan users.`);
//   }

//   return res.send(`Welcome ${name}! You are registered successfully.`);
// });
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
///////////////////////////////////////////
///////////////////////////////////////////
// let path = require("path");
// console.log(__dirname);
// const app = express();
// let public = path.join(__dirname,'public');
// app.get('/',(req,res)=>{
//     res.sendFile(`${public}/home.html`)
// })
// app.use(express.static(public))
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send(
//     `<h2>Wellcome To My Home Page</h2>
//         <a href="/about">go to about Page</a>`
//   );
// });
// app.get("/about", (req, res) => {
//   res.send([
//     {
//       name: "Ali",
//       Age: "22",
//       Depart: "BSAI",
//     },
//     {
//       name: "Muneeb",
//       Age: "20",
//       Depart: "BSSE",
//     },
//     {
//       name: "Hassan",
//       Age: "21",
//       Depart: "BSIT",
//     },
//   ]);
// });
// res.send(
//     `<h2>Wellcome To My About Page</h2>
//     <input type="text" placeholder="Enter Your Name" value= ${req.query.name}>
//     <a href="/">go to Home Page</a>`
// );
//   const name = req.query.name;
//   if (!name) {
//     res.send(`<input type="text" placeholder="Enter Your Name">`);
//   }else{
//     `<input type="text" placeholder="Enter Your Name" value= ${name}>`
//   }
// app.get('/about',(req,res)=>{
//     res.send("This is About Page");
// })
// app.get('/contact',(req,res)=>{
//     res.send("This is Contact Page" + req.query.name);
// })
///////////// EJS//////////////
// const { name } = require('ejs');
// let express = require('express');
// let app = express();
// app.set("view engine","ejs");
// app.get('/',(req,res)=>{
//     let Employee = {
//         name:"Mohsin",
//         Fname:"Saleheen",
//         age:22,
//         hobbies:['Coding','Eating','Drinking','Sleeping'],
//     }
// res.render('home',{Emp:Employee})
// })
// app.get('/about',(req,res)=>{
//     res.render('about');
// })
// app.get("/contact",(req,res)=>{
//     res.render("contact");
// })
// app.listen(3000);

// // //////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

const express = require("express");
let PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Wellcome Login System");
});
app.post("/signup", (req, res) => {
  const { userName, userEmail, userPass } = req.body;
  console.log(userName);
  console.log(userEmail);
  console.log(userPass);
  let symbol = false;
  for (let i = 0; i < userEmail.length; i++) {
    if (userEmail[i] == "@") {
      symbol = true;
      break;
    }
  }
  if (!symbol) {
    return res.send({
      status: 400,
      message: "Email must contain @ symbol.",
    });
  }
  if (userPass.length < 6) {
    return res.status(400).send({
      message: "Password must be at least 6 characters long.",
    });
  }
  res.send("Hello");
});
// const users = [
//   { email: "ahmed.khan@example.com", password: "ahmed123" },
//   { email: "sara.ali@example.com", password: "sara456" },
//   { email: "bilal.ahmed@example.com", password: "bilal789" },
//   { email: "fatima.zahid@example.com", password: "fatima321" },
//   { email: "usman.raza@example.com", password: "usman654" },
//   { email: "ayesha.noor@example.com", password: "ayesha987" },
//   { email: "hamza.malik@example.com", password: "hamza111" },
//   { email: "zara.shaikh@example.com", password: "zara222" },
//   { email: "ali.hassan@example.com", password: "ali333" },
//   { email: "maryam.iqbal@example.com", password: "maryam444" },
// ];
// app.post("/login", (req, res) => {
//   const userEmail = req.body.userEmail;
//   const userPass = req.body.userPass;
//   let isFound = false;
//   if (userPass.length >= 5) {
//     for (let i = 0; i <= users.length - 1; i++) {
//       if (users[i].email == userEmail && users[i].password == userPass) {
//         isFound = true;
//         res.send({
//           status: 200,
//           message: "Login Successfull",
//         });
//       }
//       if (isFound === false) {
//         res.send({
//           status: 404,
//           message: "Login Failed",
//         });
//       }
//     }
//   } else {
//     res.send({
//       status: 404,
//       message: "Password must be atlaest five character",
//     });
//   }
// });
app.listen(PORT, () => {
  console.log(`Server is runing at http://localhost:${PORT}`);
});
