const joi = require('joi');

const categorySchemaValidation = joi.object({
  name: joi.string().required(),
});

module.exports = categorySchemaValidation;