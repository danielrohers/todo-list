const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const TaskSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  finished: {
    type: Boolean,
    default: false
  },
  project: {
    type: ObjectId,
    ref: 'Project',
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports.TaskModel = mongoose.model('Task', TaskSchema);
