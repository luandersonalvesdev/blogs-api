const express = require('express');
const { postController } = require('../controllers');
const { jwtValidation } = require('../middlewares/jwtValidation');

const route = express.Router();

route.post('/', jwtValidation, postController.insert);

module.exports = route;