const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const loginAuth = (email, pass) => {
  const configJWT = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };
  const token = jwt.sign({ email, pass }, secret, configJWT);
  
  return token;
};

module.exports = loginAuth;