// routes/user.js
const express = require('express');
const { create } = require('../controllers/userController');
const { updatePassword } = require('../controllers/userController');
const { validateLogin } = require('../middleware/UserAuth');

const api = express.Router();

api.post('/user', validateLogin, create)
.put('/update', updatePassword);

module.exports = api;