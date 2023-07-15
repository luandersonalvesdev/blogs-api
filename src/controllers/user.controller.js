const { userService } = require('../services');

const insert = async (req, res) => {
  const newUserData = req.body;
  const { status, data } = await userService.insert(newUserData);
  return res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const data = await userService.getAll();
  return res.status(200).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);
  return res.status(status).json(data);
};

const removeMe = async (req, res) => {
  const userData = req.payload;
  const { status, data } = await userService.removeMe(userData);
  return res.status(status).json(data);
};

module.exports = {
  insert,
  getAll,
  getById,
  removeMe,
};