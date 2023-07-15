const joi = require('joi');

const postSchemaValidation = joi.object({
  title: joi.string().empty('').required(),
  content: joi.string().empty('').required(),
  categoryIds: joi.array().items(joi.number().valid(1, 2).required()).required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'any.only': 'one or more "categoryIds" not found',
});

module.exports = postSchemaValidation;