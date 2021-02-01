"use strict";

class UserStorage{
    // # : private, 은닉화
    static #users = {
        id : ["wlwlsus","elelsus","dnjswns6078"],
        password : ["1111","1111","3333"],
        name : ["나훈아","성원준","홍진영"],
    };

    static getUsers(...args){
        const users = this.#users;
        const newUsers = args.reduce((newUsers, arg)=>{
            if(users.hasOwnProperty(arg)){
                newUsers[arg] = users[arg];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
    };

}

module.exports = UserStorage;