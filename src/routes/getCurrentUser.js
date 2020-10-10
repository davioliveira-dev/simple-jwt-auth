const User = require('../models/User');

const getCurrentUser = async (req, res, next) => {

    User.findById(decoded.id, { password: 0 }, (error, user) => {
        if (error) {
            return res.status(500).send({ auth: false, message: 'There was a problem finding the user.' });
        }

        if (!user) {
            return res.status(404).send({ message: 'User not found!'})
        }

        return res.status(200).send(user);
    });
}

module.exports = getCurrentUser;