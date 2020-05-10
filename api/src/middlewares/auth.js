const { AuthService } = require('../services/auth');

module.exports.AuthMiddleware = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) {
      return next({ status: 403, message: 'Forbidden' });
    }

    const user = await AuthService.getUser(token);

    if (user) {
      req.user = user;
      req.userId = user._id;
      return next();
    }

    next({ message: 'Invalid token' });
  } catch (error) {
    next(error);
  }
};
