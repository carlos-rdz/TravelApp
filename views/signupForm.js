
function signupForm(){

    return `
    <form action="/register" method="POST">
    <label> Name </label>
        <input type="text" name="name"  >
    <label> Age </label>
        <input type="number" name="age"  >
    <label> Username </label>
        <input type="text" name="username"  >
    <label> Password </label>    
        <input type="password" name="password" >
        <br>
        <input type="submit">
    </form>
    `;
}

module.exports = signupForm;