const { AuthService } = require('../services/auth');

module.exports.AuthMiddleware = async (req, res, next) => {
  try {
    const { token } = req.body;

    if (!token) {
      return next({ status: 403, message: 'Forbidden' });
    }

    if (await AuthService.verify(token)) {
      return next();
    }

    next({ message: 'Invalid token' });
  } catch (error) {
    next(error);
  }
};
