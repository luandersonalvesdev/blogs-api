const { loginService } = require('../services');

const doLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.doLogin(email, password);
  return res.status(status).json(data);
};

module.exports = {
  doLogin,
};