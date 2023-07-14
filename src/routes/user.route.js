const express = require('express');
const { userController } = require('../controllers');
const jwtValidation = require('../middlewares/jwtValidation');

const route = express.Router();

route.post('/', userController.insert);
route.get('/', jwtValidation, userController.getAll);

module.exports = route;