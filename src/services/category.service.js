const { Category } = require('../models');
const categorySchemaValidation = require('../validation/categorySchemaValidation');

const insert = async (newCategory) => {
  const { error } = categorySchemaValidation.validate(newCategory);
  if (error) return { status: 400, data: { message: error.message } };

  const { id } = await Category.create(newCategory);
  return { status: 201, data: { id, name: newCategory.name } };
};

const getAll = () => Category.findAll();

module.exports = {
  insert,
  getAll,
};