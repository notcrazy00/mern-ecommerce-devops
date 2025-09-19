const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  try {
    // прво пробај од cookie
    let token = req.cookies?.token;

    // по желба дозволи и Authorization: Bearer ...
    if (!token && req.headers.authorization?.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) return res.status(401).json({ message: 'No token' });

    const payload = jwt.verify(token, process.env.SECRET_KEY || process.env.JWT_SECRET || 'devsecret');
    req.user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
