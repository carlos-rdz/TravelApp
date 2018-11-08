require('dotenv').config();
const users = require('./models/users');

users.createUser("NEWUSER100",10)
users.createUser("NEWUSER100",20)
users.createUser("NEWUSER100",30)
.then(data => data.deleteUser())
users.createUser("NEWUSER100",40)
.then(data => data.deleteUser())
users.createUser("NEWUSER100",50)
    // .then(console.log)

// users.getUserByID(2)
//     // .then(console.log)
//     // .then(data => {data.updateUserName("Ch")})
//     .then(console.log)


// carlos = new users(1,'carlos',24)

// carlos.updateUserName("Charles")