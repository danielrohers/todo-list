const Joi = require('@hapi/joi');

const { ProjectService } = require('../services/project');

module.exports.ProjectController = {

  /**
  * @api {get} /project List
  * @apiGroup Project
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Project[]} data
  */
  async list(req, res, next) {
    try {
      const data = await ProjectService.list(req.userId);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {post} /project Create
  * @apiGroup Project
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Project} data
  */
  async create(req, res, next) {
    try {
      const { error } = Joi.object({
        name: Joi.string().required()
      }).validate(req.body);

      if (error) return next(error);

      const data = await ProjectService.create(req.userId, req.body.name);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {get} /project/:id Find
  * @apiGroup Project
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Project} data
  */
  async findOne(req, res, next) {
    try {
      const data = await ProjectService.findOne(req.params.id, req.userId);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {put} /project/:id Update
  * @apiGroup Project
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Project} data
  */
  async update(req, res, next) {
    try {
      const { error } = Joi.object({
        name: Joi.string().required()
      }).validate(req.body);

      if (error) return next(error);

      const data = await ProjectService.update(req.params.id, req.userId, req.body.name);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {delete} /project/:id Delete
  * @apiGroup Project
  *
  * @apiSuccess {Boolean} success=true
  */
  async delete(req, res, next) {
    try {
      await ProjectService.delete(req.params.id, req.userId);
      res.status(200).json({ success: true });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {post} /project/:id/task Add task
  * @apiGroup Project
  *
  * @apiParam {String} description
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Task} data
  */
  async addTask(req, res, next) {
    try {
      const { error } = Joi.object({
        description: Joi.string().required()
      }).validate(req.body);

      if (error) return next(error);

      const data = await ProjectService.addTask(req.params.id, req.userId, req.body);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  }

};
