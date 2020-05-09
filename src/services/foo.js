const { FooModel } = require('../models/foo');

module.exports.FooService = {

  list() {
    return FooModel.find();
  },

  async create(body) {
    const foo = new FooModel(body);
    return foo.save();
  },

  async findOne(_id) {
    const foo = await FooModel.findOne({ _id });
    if (!foo) throw new Error({ status: 404, message: 'Not found.' });
    return foo;
  },

  async update(_id, body) {
    const foo = await this.findOne(_id);
    for (const key in body) foo[key] = body[key];
    return foo.save();
  },

  async delete(_id) {
    const foo = await this.findOne(_id);
    await foo.remove();
  }

};
