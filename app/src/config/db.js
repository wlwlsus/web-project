const mysql = require("mysql");

const db = mysql.createConnection(
    {
        host: "dscoing-login.c2dp2cnmm8ms.ap-northeast-2.rds.amazonaws.com",
        user: "admin",
        password: "ss2109412",
        database: "login_lecture",
});

db.connect();

module.exports = db;