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

module.exports = {
  insert,
  getAll,
};