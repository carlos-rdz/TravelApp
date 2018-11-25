const bcrypt = require('bcrypt');
const saltRounds = 10;

var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync("password", salt);


const didMatch = bcrypt.compareSync("password",hash)

