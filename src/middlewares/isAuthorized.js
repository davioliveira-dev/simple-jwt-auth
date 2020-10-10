const User = require('../models/User');

const isAuthorized = (req, res, next) => {
    const acceptedEmail = 'davioliveira@gmail.com';

    User.findById(decoded.id, { password: 0 }, (error, user) => {

        if (error) {
            return res.status(500).send("Internal Server Error");
        }

        if (!user) {
            return res.status(404).send("User not found ! You must have an account to make this request.");
        }

        if (user.email !== acceptedEmail) { 
            return res.status(401).send("You are not authorized.");
        }

        return res.status(200).send(quote);
    });
}

module.exports = isAuthorized;