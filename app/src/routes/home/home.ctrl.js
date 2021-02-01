"use strict";

const User = require("../../model/User");

//function(){}'s ECAM Script ver
//렌더링 파트
const output={
    hello : (req,res)=>{
        res.render("home/index");
    },
    
    login : (req,res)=>{
        res.render("home/login");
    },
};

const process = {
    login: (req,res)=>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};