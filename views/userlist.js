function userToItem(userObject){
    // need to fix first route
    return `
    <li>
    <a href="place/${userObject.id}/">
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