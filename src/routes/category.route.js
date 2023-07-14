const express = require('express');
const { categoryController } = require('../controllers');
const { jwtValidation, jwtValidationWithoutBearer } = require('../middlewares/jwtValidation');

const route = express.Router();

route.get('/', jwtValidation, categoryController.getAll);
route.post('/', jwtValidationWithoutBearer, categoryController.insert);

module.exports = route;