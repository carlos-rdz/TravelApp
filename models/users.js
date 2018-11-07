// CREATE, RETRIEVE, UPDATE, DELETE


const db = require('./db');

class User {
    constructor(id,name,age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
// CREATE
    static createUser(name,age){
        return db.one(`insert into users
        (name,age)
        values
        ($1,$2)
        returning id`,[name,age])
            .then(data => {
                return new User (data.id, name, age);
            })
}
    // RETRIEVE
    static getUserByID(id){
        return db.one(
            `select * from users
            where id=$1`,[id]
        )
            .then(data => {
                return new User (data.id, data.name, data.age)
            })
    }


    // Update

    updateUserName(name){
        return db.any(`update users set name=$1 where id=$2`,[name,this.id])
    }
}











module.exports = User



