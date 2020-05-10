const { FooService } = require('../services/foo');

module.exports.FooController = {

  /**
  * @api {get} /foo List
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo[]} data
  */
  async list(req, res, next) {
    try {
      const data = await FooService.list();
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {post} /foo Create
  * @apiGroup Foo
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  async create(req, res, next) {
    try {
      const data = await FooService.create(req.body);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {get} /foo/:id Find
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  async findOne(req, res, next) {
    try {
      const data = await FooService.findOne(req.params.id);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {put} /foo/:id Update
  * @apiGroup Foo
  *
  * @apiParam {String} [name]
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {Foo} data
  */
  async update(req, res, next) {
    try {
      const data = await FooService.update(req.params.id, req.body);
      res.status(200).json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },

  /**
  * @api {delete} /foo/:id Delete
  * @apiGroup Foo
  *
  * @apiSuccess {Boolean} success=true
  */
  async delete(req, res, next) {
    try {
      await FooService.delete(req.params.id);
      res.status(200).json({ success: true });
    } catch (error) {
      next(error);
    }
  }

};
