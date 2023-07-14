const loginGenerateToken = require('../auth/loginGenerateToken');
const userSchemaValidation = require('../validation/userSchemaValidation');
const { User } = require('../models');

const insert = async (newUserData) => {
  const { error } = userSchemaValidation.validate(newUserData);
  if (error) return { status: 400, data: { message: error.message } };

  const emailExistsOnDb = await User.findOne({ where: { email: newUserData.email } });

  if (emailExistsOnDb) return { status: 409, data: { message: 'User already registered' } };

  await User.create(newUserData);

  const tokenNewUser = loginGenerateToken(newUserData);
  return { status: 201, data: { token: tokenNewUser } };
};

module.exports = {
  insert,
};