function placeToItem(placeObject){
    return `
    <li>${placeObject.location}</li>
    `
}


function placeList(arrayOfPlaces){
    
    const placeitems = arrayOfPlaces.map(placeToItem).join('');
    


    return `
        <ul>${placeitems}</ul>
    `
}


module.exports = placeList