const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(403).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, secret, (error, decoded) => {
        
        if (error) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }

        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;