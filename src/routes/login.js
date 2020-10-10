const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.SECRET;
const User = require('../models/User');

const login = async (req, res) => {

    const { email, password } = req.body;
    
    if (!req.body || !email || !password) {
        return res.status(400).send({ message: 'No email or password provided' })
    }

    User.findOne({ email }, (error, user) => {

        if (error) {
            res.status(500).send('Internal Server Error.');
        }

        if (!user) {
            return res.status(404).send('User does not exists');
        }
    
        const passwordIsValid = bcrypt.compareSync(password, user.password);
    
        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, token: null, message: 'Invalid Credentials' });
        }
    
        const token = jwt.sign({ id: user._id }, secret, {
            expiresIn: 86400
        });
    
        return res.status(200).send({ auth: true, token: token });
    });
}

module.exports = login;