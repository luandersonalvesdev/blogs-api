const loginSchemaValidation = require('../validation/loginSchemaValidation');
const loginAuth = require('../auth/loginGenerateToken');
const { User } = require('../models');

const doLogin = async (email, pass) => {
  const { error } = loginSchemaValidation.validate({ email, pass });
  if (error) return { status: 400, data: { message: 'Some required fields are missing' } };

  const userFromDb = await User.findOne({ where: { email } });
  if (!userFromDb) return { status: 400, data: { message: 'Invalid fields' } };

  const userToken = loginAuth(email, pass);

  return { status: 200, data: { token: userToken } };
};

module.exports = {
  doLogin,
};