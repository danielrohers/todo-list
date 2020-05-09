const getRoute = (name) => require(`../src/routes/${name}`);

const { ErrorHandlerMiddleware } = require('../src/middlewares/errorHandler');
const { AuthMiddleware } = require('../src/middlewares/auth');

module.exports = (app) => {
  app.use('/healthcheck', getRoute('healthcheck'));
  app.use('/foo', AuthMiddleware, getRoute('foo'));
  app.use('/auth', getRoute('auth'));

  app.use(ErrorHandlerMiddleware.catch404);
  app.use(ErrorHandlerMiddleware.handler);
};
