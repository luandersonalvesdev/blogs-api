const { userService } = require('../services');

const insert = async (req, res) => {
  const newUserData = req.body;
  const { status, data } = await userService.insert(newUserData);
  return res.status(status).json(data);
};

module.exports = {
  insert,
};