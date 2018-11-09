require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const users = require('./models/users');
const place = require('./models/place');

const page = require('./views/page')
const placeList = require('./views/placelist')


app.get('/',(req,res) => {
    res.send(page('Heeeeeellllo'))
});



app.post('/users',(req,res) => {
    users.createUser(req.body.name,req.body.age)
        .then(theUser => {
            res.send(theUser);
        })
});

app.post('/users/:id([0-9]+)',(req,res) => {
    const id = req.params.id;
    const newName = req.body.name

    users.getUserByID(id)
        .then(theUser => {
            theUser.updateUserName(newName);
        })
        
});

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
    place.getAllPlaces()
    .then(places => {

        const placeUL = placeList(places)
        const thePage = page(placeUL);
        res.send(thePage);
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