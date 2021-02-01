"use strict";

const UserStorage = require("../../model/UserStorage");

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
        const id = req.body.id,
            password = req.body.psword;

        // const us = new UserStorage();
        const us = UserStorage.getUsers("id","password");

        // console.log(UserStorage.getUsers("id"));
        const response = {};

        if(us.id.includes(id)){
            const idx = us.id.indexOf(id);
            if(us.password[idx] === password)
            {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};