require('dotenv').config();


const express = require('express');
const app = express();


const users = require('./models/users');


app.get('/users',(req,res) => {
    // need to add a get all
    users.getUserByID(1)
        .then(user => {
            res.send(user);
        })
});
app.get('/users/:id([0-9]+)',(req,res) => {
    users.getUserByID(req.params.id)
        .then(user => {
            res.send(user)
        })
});

app.listen(3000, () => {
    console.log('your express app is readddddy')
});