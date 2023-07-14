const { getPayload } = require('../auth/authToken');

const jwtValidation = (req, res, next) => {
  try {
    const { authorization: auth } = req.headers;
    if (!auth) return res.status(401).json({ message: 'Token not found' });

    const payload = getPayload(auth);
    req.payload = payload;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = jwtValidation;