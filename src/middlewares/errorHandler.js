module.exports.ErrorHandlerMiddleware = {

  catch404(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  },

  handler(err, req, res, next) {
    if (!next) return;
    const success = false;
    const message = err.message || err;

    if (message.name === 'ValidationError' && message.details) {
      const errors = err.message.details.map((detail) => detail.message);
      return res.status(400).json({ success, status: 400, message: errors });
    }

    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((error) => error.message);
      res.status(400).json({ success, status: 400, message: errors });
    }

    const status = err.status || 500;

    res.status(status).json({ success, status, message });
  }

};
