
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET ;

exports.generateToken = (id,email) => {
    console.log(id,email)
    const token = jwt.sign({ id: id, email: email }, SECRET_KEY, { expiresIn: '1h' });
    return token
}

