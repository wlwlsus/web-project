"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//미들웨어
app.use("/", home); // use -> 미들웨어 등록해주는 메서드

module.exports = app;

// const http = require("http");
// const app = http.createServer((req, res)=>{
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8;"});
//     if(req.url === '/'){
//         res.end("루트 페이지");
//     }
//     else if(req.url === '/login'){
//         res.end("로그인 페이지")
//     }
//     // console.log(req.url);
// });

// app.listen(3001, ()=>{
//     console.log("콘솔 서버")
// })

