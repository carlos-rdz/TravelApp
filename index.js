require('dotenv').config();


const express = require('express');
const app = express();


const users = require('./models/users');
const place = require('./models/place');


// place.createPlace("newplace",1)
//     .then(console.log)



// place.getPlaceById(1)
//     .then(data => {
//         console.log(data)})
//     ;


place.getAllPlaces()
    .then(console.log)

app.get('/users',(req,res) => {
    // need to add a get all
    users.getAll()
        .then(users => {
            res.send(users);
        })
});

app.get('/users/:id([0-9]+)',(req,res) => {
    users.getUserByID(req.params.id)
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.send(err)
    })
});

app.listen(3000, () => {
    console.log('your express app is readddddy')
});


app.get('/place',(req,res) => {
    // need to add a get all
    place.getAllPlaces()
    .then(places => {
        res.send(places);
    })
});


app.get('/place/:id([0-9]+)',(req,res) => {
    place.getPlaceById(req.params.id)
    .then(place => {
        res.send(place)
    })
    .catch(err => {
        res.send(err)
    })
});