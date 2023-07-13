const joi = require('joi');

const loginSchemaValidation = joi.object({
  email: joi.string().min(1).required(),
  pass: joi.string().min(1).required(),
});

module.exports = loginSchemaValidation;