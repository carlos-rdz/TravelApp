const db = require('./db');

class Place {

    constructor(id,location, image, user_id){

        this.id = id
        this.location = location
        this.image = image
        this.user_id = user_id
    }

// create

static createPlace(location,user_id){
    return db.result("insert into place (location, user_id) values ($1, $2)", [location, user_id])
        // .then(console.log)
        
}
// retreive

static getAllPlaces(){
    return db.any("select * from place")
        .then(data => {
            let placeArray = data.map(object => {
                return new Place (object.id, object.location, object.image, object.user_id)
            })
            return placeArray
        })
        // .then(console.log)

}


static getPlaceById(id){
    return db.one('select * from place where id=$1', [id])
    .then(data => {
        return new Place (data.id, data.location, data.image, data.user_id);
    })
    // .then(console.log)
}


// need to fix this
static getPlacesByUserId(id){
    return db.any('select * from place where user_id=$1', [id])
    .then(data => {
        let placesArray = data.map(object => {

            return new Place (object.id, object.location, object.image, object.user_id);
        })
    return placesArray
    })
    .catch("No places for this user")
    // .then(console.log)
}

// update
 updatePlaceLocation(location){
    this.location = location ;
    return db.result(`update place set location=$1 where id=$2`,[location,this.id]);
}



// delete

deleteThisLocation(){
    return db.result('delete from place where id=$1',[this.id])
}


}

module.exports = Place