// authMiddleware.js
require('dotenv').config();

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET; // Use a strong secret key

const authenticate = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }
  const token = req.headers.authorization.split(' ')[1]; // Extract token
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
    next();
  });
};
module.exports = authenticate