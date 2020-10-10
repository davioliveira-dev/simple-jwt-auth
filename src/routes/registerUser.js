const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.SECRET;
const User = require('../models/User');

const registerUser = async (req, res) => {
    
    const { email, password } = req.body;

    if (!req.body || !email || !password) {
        return res.status(400).send({ 
            message: 'Bad Request, please send email and password'
        });
    }

    try {

        const existentUser = await User.findOne({
            email
        });

        if (existentUser) {
            return res.status(400).send({ message: 'User alredy exists!' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const user = await User.create({ email, password: hashedPassword });

        const token = jwt.sign({ id: user._id }, secret, {
            expiresIn: 86400
        });

        return res.status(401).send({ auth: true, token });
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send(error);
    }
}

module.exports = registerUser;