const express = require('express');
const { ProjectController } = require('../controllers/project');

const router = express.Router();

router
  .route('/')
  .get(ProjectController.list)
  .post(ProjectController.create);

router
  .route('/:id')
  .get(ProjectController.findOne)
  .put(ProjectController.update)
  .delete(ProjectController.delete);

router
  .route('/:id/task')
  .post(ProjectController.addTask);

module.exports = router;
