const { ProjectModel } = require('../models/project');
const { TaskService } = require('./task');

module.exports.ProjectService = {

  list(userId) {
    return ProjectModel.find({ user: userId }).populate('tasks');
  },

  async create(userId, name) {
    const data = new ProjectModel();
    data.name = name;
    data.user = userId;
    return data.save();
  },

  async findOne(_id, userId) {
    const project = await ProjectModel.findOne({ _id, user: userId });
    if (!project) throw { status: 404, message: 'Not found' };
    return project;
  },

  async update(_id, userId, name) {
    const data = await this.findOne(_id, userId);
    data.name = name;
    return data.save();
  },

  async delete(_id, userId) {
    const data = await this.findOne(_id, userId);
    await TaskService.deleteByProject(_id, userId);
    await data.remove();
  },

  async addTask(projectId, userId, body) {
    const project = await this.findOne(projectId, userId);
    const task = await TaskService.create({ ...body, project: projectId, user: userId });
    project.tasks.push(task);
    await project.save();
    return task;
  }

};
