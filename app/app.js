"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//미들웨어
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식하지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

// 하단에 위치 해야함
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

