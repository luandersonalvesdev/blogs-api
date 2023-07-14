const { generateToken } = require('../auth/authToken');
const userSchemaValidation = require('../validation/userSchemaValidation');
const { User } = require('../models');

const insert = async (newUserData) => {
  const { error } = userSchemaValidation.validate(newUserData);
  if (error) return { status: 400, data: { message: error.message } };

  const emailExistsOnDb = await User.findOne({ where: { email: newUserData.email } });

  if (emailExistsOnDb) return { status: 409, data: { message: 'User already registered' } };

  await User.create(newUserData);

  const tokenNewUser = generateToken(newUserData);
  return { status: 201, data: { token: tokenNewUser } };
};

const getAll = () => User.findAll({ attributes: { exclude: ['password'] } });

const getById = async (userId) => {
  const data = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
  console.log('data', data);
  if (!data) return { status: 404, data: { message: 'User does not exist' } };

  return { status: 200, data };
};

module.exports = {
  insert,
  getAll,
  getById,
};