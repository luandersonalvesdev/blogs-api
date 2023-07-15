const { postService } = require('../services');

const insert = async (req, res) => {
  const postData = req.body;
  const { payload } = req;
  const { status, data } = await postService.insert(postData, payload);
  return res.status(status).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await postService.getAll();
  return res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getById(id);
  return res.status(status).json(data);
};

const update = async (req, res) => {
  const postUpdates = req.body;
  const userData = req.payload;
  const { id } = req.params;
  const { status, data } = await postService.update(id, postUpdates, userData);
  return res.status(status).json(data);
};

module.exports = {
  insert,
  getAll,
  getById,
  update,
};