const jwt = require('jsonwebtoken');

const authMiddleware = ({ req, res }) => {
  const token = req.headers.authorization;

  if (!token) {
    return req;
  }

  const [_, jwtToken] = token.split(' ');

  if (!jwtToken) {
    return req;
  }

  const verifiedToken = jwt.verify(jwtToken.trim(), process.env.SECRET);

  if (verifiedToken) {
    req.user = verifiedToken;
  }

  return req;
};

module.exports = { authMiddleware };
