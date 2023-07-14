const { categoryService } = require('../services');

const insert = async (req, res) => {
  const newCategory = req.body;
  const { status, data } = await categoryService.insert(newCategory);
  return res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const data = await categoryService.getAll();
  return res.status(200).json(data);
};

module.exports = {
  insert,
  getAll,
};