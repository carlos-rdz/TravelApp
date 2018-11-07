require('dotenv').config();
const users = require('./models/users');

// users.createUser("NEWUSER100",50)
//     .then(console.log)

users.getUserByID(4)
    .then(data => {data.updateUserName("Charles")})
    .then(console.log)

// carlos = new users(1,'carlos',24)

// carlos.updateUserName("Charles")