const Joi = require('@hapi/joi');

const { AuthService } = require('../services/auth');
const { UserService } = require('../services/user');

module.exports.AuthController = {

  /**
  * @api {post} /auth/signin Sign In
  * @apiGroup Auth
  *
  * @apiParam {String} email
  * @apiParam {String} password
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Object} data
  */
  async signIn(req, res, next) {
    try {
      const { error } = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
      }).validate(req.body);

      if (error) return next(error);

      const { email, password } = req.body;

      const user = await UserService.findByEmail(email);

      if (!user || !user.authenticate(password)) {
        return next({ status: 400, message: 'Invalid credentials' });
      }

      user.lastLogin = Date.now();
      await user.save();

      const token = AuthService.sign(user._id, user.lastLogin);
      res.status(200).json({ success: true, data: { user, token } });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {post} /auth/signup Sign Up
  * @apiGroup Auth
  *
  * @apiParam {String} name
  * @apiParam {String} email
  * @apiParam {String} password
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Object} data
  */
  async signUp(req, res, next) {
    try {
      const { error } = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
      }).validate(req.body);

      if (error) return next(error);

      const { name, email, password } = req.body;

      if (await UserService.exists(email)) {
        return next({ status: 400, message: 'User already exist' });
      }

      const user = await UserService.create({
        name,
        email,
        password,
        lastLogin: Date.now()
      });

      const token = AuthService.sign(user._id, user.lastLogin);
      res.status(200).json({ success: true, data: { user, token } });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {post} /auth/verify Verify
  * @apiGroup Auth
  *
  * @apiSuccess (403) {String} message
  * @apiSuccess (403) {Number=403} status
  * @apiSuccess (403) {Boolean=false} success
  *
  * @apiSuccess (500) {String} message
  * @apiSuccess (500) {Number=500} status
  * @apiSuccess (500) {Boolean=false} success
  *
  * @apiSuccess {Boolean=true} success
  * @apiSuccess {Object} data
  */
  verify(req, res) {
    res.status(200).json({ success: true, data: { user: req.user, token: req.token } });
  }

};
