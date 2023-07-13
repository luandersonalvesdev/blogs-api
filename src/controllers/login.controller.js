const { loginService } = require('../services');

const doLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.doLogin(email, password);
  return res.status(result.status).json(result.data);
};

module.exports = {
  doLogin,
};