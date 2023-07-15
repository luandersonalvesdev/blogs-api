const { postService } = require('../services');

const insert = async (req, res) => {
  const postData = req.body;
  const { payload } = req;
  const { status, data } = await postService.insert(postData, payload);
  return res.status(status).json(data);
};

module.exports = {
  insert,
};