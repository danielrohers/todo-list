const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tasks: [
    {
      type: ObjectId,
      ref: 'Task'
    }
  ],
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports.ProjectModel = mongoose.model('Project', ProjectSchema);
