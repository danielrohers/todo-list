const Joi = require('@hapi/joi');

const { TaskService } = require('../services/task');

module.exports.TaskController = {

  /**
  * @api {put} /task/:id Update
  * @apiGroup Task
  *
  * @apiParam {String} description
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Task} data
  */
  async update(req, res, next) {
    try {
      const { error } = Joi.object({
        description: Joi.string().required()
      }).validate(req.body);

      if (error) return next(error);

      const data = await TaskService.update(req.params.id, req.userId, req.body.description);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {delete} /task/:id Delete
  * @apiGroup Task
  *
  * @apiSuccess {Boolean} success=true
  */
  async delete(req, res, next) {
    try {
      await TaskService.delete(req.params.id, req.userId);
      res.status(200).json({ success: true });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {post} /task/:id Finished
  * @apiGroup Task
  *
  * @apiSuccess {Boolean} success=true
  */
  async finished(req, res, next) {
    try {
      await TaskService.finished(req.params.id, req.userId);
      res.status(200).json({ success: true });
    } catch (error) {
      next(error);
    }
  }

};
