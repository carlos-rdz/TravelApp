function userToItem(userObject){
    // need to fix first route
    return `
    <li>
    <a href="users/${userObject.id}/place">
    ${userObject.name}
    </a>
    <a href="/users/${userObject.id}/edit">
    (edit)
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