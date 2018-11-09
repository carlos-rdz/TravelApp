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

static getPlaceByUserId(id){
    return db.one('select * from place where user_id=$1', [id])
    .then(data => {
        return new Place (data.id, data.location, data.image, data.user_id);
    })
    // .then(console.log)
}

// update




// delete


}

module.exports = Place