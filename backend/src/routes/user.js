// routes/user.js
const express = require('express');
const { create } = require('../controllers/userController');
const { updatePassword } = require('../controllers/userController');
const { validateLogin, validateUpdate } = require('../middleware/UserAuth');

const api = express.Router();

api.post('/user', validateLogin, create)
.put('/update', validateUpdate, updatePassword);

module.exports = api;