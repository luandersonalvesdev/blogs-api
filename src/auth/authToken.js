const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';
const configJWT = { algorithm: 'HS256', expiresIn: '1d' };

const generateToken = (payload) => jwt.sign(payload, secret, configJWT);

const getPayload = (token) => {
  const [withoutBaerer, withBaerer] = token.split(' ');
  let payload = '';
  if (withBaerer) {
    payload = jwt.verify(withBaerer, secret);
  } else {
    payload = jwt.verify(withoutBaerer, secret);
  }
  return payload;
};

const getPayloadWithoutBearer = (token) => jwt.verify(token, secret);

module.exports = { generateToken, getPayload, getPayloadWithoutBearer };