require('dotenv').config();
const express = require('express');

const User = require('../models/User');
const registerUser = require('./registerUser');
const login = require('./login');
const getCurrentUser = require('./getCurrentUser');
const verifyToken = require('../middlewares/verifyToken');
const getQuote = require('./getQuote');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/current-user', verifyToken, getCurrentUser);
router.get('/get-quote', verifyToken, getQuote);

module.exports = router;