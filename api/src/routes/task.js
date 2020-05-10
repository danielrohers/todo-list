const express = require('express');
const { TaskController } = require('../controllers/task');

const router = express.Router();

router
  .route('/:id')
  .put(TaskController.update)
  .delete(TaskController.delete);

router
  .route('/:id/finished')
  .post(TaskController.finished);

module.exports = router;
