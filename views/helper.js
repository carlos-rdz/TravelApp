function logoutButton(){

    return
    `<div>
    <form action="/logout" method="POST">
    <input type="submit" value="logout">
    </div>`
}

function loginOrRegister(){

    return
    `<div>
    <a href ="/login">Login</a>
    |
    <a href ="/register">Register</a>
    </div>`
}


module.exports = {
    logoutButton,
    loginOrRegister
}