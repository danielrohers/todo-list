const express = require('express');
const { AuthController } = require('../controllers/auth');
const { AuthMiddleware } = require('../middlewares/auth');

const router = express.Router();

router
  .route('/signup')
  .post(AuthController.signUp);

router
  .route('/signin')
  .post(AuthController.signIn);

router
  .route('/verify')
  .post(AuthMiddleware, AuthController.verify);

module.exports = router;
