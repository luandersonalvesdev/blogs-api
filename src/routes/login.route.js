const express = require('express');
const { loginController } = require('../controllers');

const route = express.Router();

route.post('/', loginController.doLogin);

module.exports = route;