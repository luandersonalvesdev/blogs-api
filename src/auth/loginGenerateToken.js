const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const loginAuth = (objData) => {
  const configJWT = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };
  const token = jwt.sign(objData, secret, configJWT);

  return token;
};

module.exports = loginAuth;