const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';
const configJWT = { algorithm: 'HS256', expiresIn: '1d' };

const generateToken = (payload) => jwt.sign(payload, secret, configJWT);

const getPayload = (token) => {
  const tokenSplited = token.split(' ');
  let payload = '';
  if (tokenSplited[1]) {
    payload = jwt.verify(tokenSplited[1], secret);
  } else {
    payload = jwt.verify(token, secret);
  }
  return payload;
};

const getPayloadWithoutBearer = (token) => jwt.verify(token, secret);

module.exports = { generateToken, getPayload, getPayloadWithoutBearer };