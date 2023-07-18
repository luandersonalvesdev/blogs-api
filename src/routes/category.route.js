const express = require('express');
const { categoryController } = require('../controllers');
const { jwtValidation } = require('../middlewares/jwtValidation');

const route = express.Router();

route.get('/', jwtValidation, categoryController.getAll);
route.post('/', jwtValidation, categoryController.insert);

module.exports = route;