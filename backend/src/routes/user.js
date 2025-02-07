// routes/user.js
const express = require('express');
const { create } = require('../controllers/userController');

const api = express.Router();
api.post('/user', create);

module.exports = api;