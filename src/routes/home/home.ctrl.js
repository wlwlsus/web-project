"use strict";

//function(){}'s ECAM Script ver
const hello = (req,res)=>{
    res.render("home/index");
};

const login = (req,res)=>{
    res.render("home/login");
};

module.exports = {
    hello,
    login
}