function userForm(aUser){

    return `
    <form action="/users/${aUser.id}/edit" method="POST">
        <input type="text" name="name" value="${aUser.name}">
        <br>
        <input type="submit">
    </form>
    `;
}

module.exports = userForm;