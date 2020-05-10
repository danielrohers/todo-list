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

    if (err.name === 'ValidationError') {
      const getJoiErrors = () => err.details.map((detail) => detail.message);
      const getMongooseErrors = () => Object.values(err.errors).map((error) => error.message);
      const errors = err.details ? getJoiErrors() : getMongooseErrors();
      res.status(400).json({ success, status: 400, message: errors });
    }

    const status = err.status || 500;

    res.status(status).json({ success, status, message });
  }

};
