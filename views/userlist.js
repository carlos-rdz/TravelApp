function userToItem(userObject){
    return `
    <li>
    <a href="#">
    ${userObject.name}
    </a>
    </li>
    `
}


function userList(arrayOfUsers){
    
    const useritems = arrayOfUsers.map(userToItem).join('');
    


    return `
        <ul>${useritems}</ul>
    `
}


module.exports = userList