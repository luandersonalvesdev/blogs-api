const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';
const configJWT = { algorithm: 'HS256', expiresIn: '1d' };

const generateToken = (payload) => jwt.sign(payload, secret, configJWT);

const getPayload = (token) => {
  const [, trueToken] = token.split(' ');
  const payload = jwt.verify(trueToken, secret);
  return payload;
};

module.exports = { generateToken, getPayload };