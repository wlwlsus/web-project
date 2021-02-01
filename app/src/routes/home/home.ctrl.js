"use strict";



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

const users = {
    id : ["wlwlsus","elelsus","dnjswns6078"],
    password : ["1111","1111","3333"]
};

const process = {
    login: (req,res)=>{
        const id = req.body.id,
            password = req.body.psword;
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password)
            {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        });
    },
};

module.exports = {
    output,
    process,
};