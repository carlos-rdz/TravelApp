const bcrypt = require('bcrypt');
const saltRounds = 10;
// var hash = bcrypt.hashSync("password", salt);
// CREATE, RETRIEVE, UPDATE, DELETE


const db = require('./db');

class User {
    constructor(id,name,age,username,password) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.username = username;
        // this.password = password
    }
// CREATE
    static createUser(name,age,username,password){
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password,salt)
        return db.one(`insert into users
        (name,age,username, pwhash)
        values
        ($1,$2,$3,$4)
        returning id`,[name,age,username,hash])
            .then(data => {
                return new User (data.id, name, age,username);
            })
}
    // RETRIEVE

    static getAll(){
        return db.any(`select * from users`)
            .then(dataArray => {
                let newArray = dataArray.map(element => {
                    return new User (element.id, element.name, element.age)
                });
                return newArray
            })
    }

    static getUserByID(id){
        return db.one(
            `select * from users
            where id=$1`,[id]
        )
            .then(data => {
                return new User (data.id, data.name, data.age)
            })
            // .then(console.log)
    }

    static getHashByUsername(username){
        return db.one(
            `select pwhash from users
            where username=$1`,[username]
        )
                
            // })
            // .then(console.log)
    }

    static passwordDoesMatch(username,password){
        
    }


    // Update

    updateUserName(name){
        this.name = name
        return db.result(`update users set name=$1 where id=$2`,[name,this.id])
            // .then(console.log)  
        // .then(data => {
            //     return new User (this.id, this.name, this.age)
            // })
    }
    
    updateAge(age){
        this.age = age
        return db.result(`update users set age=$1 where id=$2`,[age,this.id])
            // .then(console.log)  
        // .then(data => {
            //     return new User (this.id, this.name, this.age)
            // })
    }

    // Delete


    deleteUser(){

        return db.result('delete from users where id=$1',[this.id])
        
    }
}












module.exports = User



