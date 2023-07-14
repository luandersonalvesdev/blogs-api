const express = require('express');
const { userController } = require('../controllers');
const { jwtValidation } = require('../middlewares/jwtValidation');

const route = express.Router();

route.post('/', userController.insert);
route.get('/', jwtValidation, userController.getAll);
route.get('/:id', jwtValidation, userController.getById);

module.exports = route;