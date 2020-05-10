const { TaskModel } = require('../models/task');

module.exports.TaskService = {

  async create(body) {
    const task = new TaskModel(body);
    return task.save();
  },

  async findOne({ _id, userId, ...query } = {}) {
    const task = await TaskModel.findOne({ ...query, _id, user: userId });
    if (!task) throw new Error({ status: 404, message: 'Not found' });
    return task;
  },

  async update(_id, userId, description) {
    const data = await this.findOne({ _id, userId, finished: false });
    data.description = description;
    return data.save();
  },

  async finished(_id, userId) {
    const task = await this.findOne({ _id, userId });
    task.finished = true;
    return task.save();
  },

  async delete(_id, userId) {
    const task = await this.findOne({ _id, userId, finished: false });
    await task.remove();
  },

  deleteByProject(projectId, userId) {
    return TaskModel.remove({ project: projectId, user: userId });
  }

};
